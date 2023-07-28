import { BlogPost, Meta } from "../shared/types";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/kelley-sharp/blog-posts/main/${fileName}2`,
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

  const postId = fileName.replace("/index", "").replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: {
      postId,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };
  return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    "https://api.github.com/repos/kelley-sharp/blog-posts/git/trees/main?recursive=1",
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

  const repoFiletree: { tree: [{ path: string }] } = await res.json();

  const filesArray = repoFiletree.tree.map((tree) => {
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
