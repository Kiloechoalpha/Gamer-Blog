import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getPostsFiles() {
  try {
    const files = await fs.readdir(postsDirectory);
    return files.filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

export async function getPostData(postIdentifier) {
  try {
    const postSlug = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug: postSlug,
      ...data,
      content,
    };
  } catch (error) {
    console.error(`Error reading post data for ${postIdentifier}:`, error);
    return null;
  }
}

export async function getAllPosts() {
  try {
    const postFiles = await getPostsFiles();
    const postsData = await Promise.all(postFiles.map(getPostData));
    return postsData.filter(post => post !== null).sort((postA, postB) =>
      postA.date > postB.date ? -1 : 1
    );
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

export async function getFeaturedPosts() {
  try {
    const allPosts = await getAllPosts();
    return allPosts.filter(post => post.isFeatured);
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}
