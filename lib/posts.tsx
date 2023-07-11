import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "../types";

const postsDirectory = path.join(process.cwd(), "blog-posts");

export function getSortedPostsData() {
  //get filenames under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    //Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    //Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    //combine the data with the id
    return blogPost;
  });

  //sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
