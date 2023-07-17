import { Octokit } from "@octokit/core";
import { BlogPost, Meta } from "../types";
import { compileMDX } from "next-mdx-remote/rsc";

type FileTree = {
  trees: [{ path: string; sha: string }];
};

type FrontMatter = {
  title: string;
  date: string;
  tags: string[];
};

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getPostByName(blogPostData: {
  path: string;
  sha: string;
}): Promise<BlogPost | undefined> {
  const res = await octokit.request("GET /repos/{owner}/{repo}/git/blobs/{file_sha}", {
    owner: "kelley-sharp",
    repo: "blog-posts",
    file_sha: `${blogPostData.sha}`,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (res.status !== 200) return undefined;

  const rawMdx = res.data.content;

  if (rawMdx === "404: Not Found") return undefined;

  const { frontMatter, content } = await compileMDX<FrontMatter>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
    },
  });

  const id = blogPostData.path.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: { id, title: frontMatter.title, date: frontMatter.date, tags: frontMatter.tags },
    content,
  };

  return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  console.log({ githubToken: process.env.GITHUB_TOKEN });

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

  const repoFiletree: FileTree = { trees: [{ path: res.data.tree, sha: res.data.tree.sha }] };

  const filesDataArray = repoFiletree.trees.map((tree) => {
    path: tree.path;
    sha: tree.sha;
  });

  const posts: Meta[] = [];

  for (const fileData of filesDataArray) {
    const post = await getPostByName(fileData);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }
}
