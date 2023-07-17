import { BlogPost, Meta } from "../types";
import { compileMDX } from "next-mdx-remote/rsc";

type FileTree = {
  tree: [{ path: string }];
};

type FrontMatter = {
  title: string;
  date: string;
  tags: string[];
};

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/repos/kelley-sharp/blog-posts/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-Github-Api-Version": "2022-11-28",
      },
    },
  );
  if (!res.ok) return undefined;

  const rawMdx = await res.text();

  if (rawMdx === "404: Not Found") return undefined;

  const { frontMatter, content } = await compileMDX<FrontMatter>({
    source: rawMdx,
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: { id, title: frontMatter.title, date: frontMatter.date, tags: frontMatter.tags },
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
        "X-Github-Api-Version": "2022-11-28",
      },
    },
  );
  if (!res.ok) return undefined;

  const repoFiletree: FileTree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }
}
