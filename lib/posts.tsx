import { Octokit } from "@octokit/core";
import { BlogPost, Meta } from "../types";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
  console.log({ fileName });
  const res = await fetch(
    `https://raw.githubusercontent.com/kelley-sharp/blog-posts/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    },
  );

  if (!res.ok) return undefined;

  const rawMdx = await res.text();

  if (rawMdx === "404: Not Found") return undefined;

  // @ts-expect-error `frontMatter` is NOT camelcase
  const { content, frontmatter } = await compileMDX<{
    title: string;
    date: string;
    tags?: string[];
  }>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };
  return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await octokit.request("GET /repos/{owner}/{repo}/git/trees/{tree_sha}?recursive=1", {
    owner: "kelley-sharp",
    repo: "blog-posts",
    tree_sha: "main",
    headers: {
      Accept: "application/vnd.github+json",
      "X-Github-Api-Version": "2022-11-28",
    },
  });

  if (res.status !== 200) return undefined;

  const repoFiletree: { trees: [{ path: string }] } = { trees: res.data.tree };

  const filesArray = repoFiletree.trees.map((tree) => {
    if (tree.path.endsWith(".mdx")) {
      return tree.path;
    }
  });
  const posts: Meta[] = [];

  for (const file of filesArray) {
    if (file !== undefined) {
      const post = await getPostByName(file);
      if (post) {
        const { meta } = post;
        posts.push(meta);
      }
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
