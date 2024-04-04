import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

// Define the directory where posts are stored
const postsDirectory = path.join(process.cwd(), "posts");

/**
 * Retrieves all the file names of Markdown posts in the posts directory.
 * @returns {Promise<string[]>} An array of file names.
 */
export async function getPostsFiles() {
  try {
    const files = await fs.readdir(postsDirectory);
    return files.filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

/**
 * Retrieves metadata and content of a post.
 * @param {string} postIdentifier The identifier of the post (file name).
 * @returns {Promise<Object|null>} An object containing the post metadata and content, or null if an error occurs.
 */
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

/**
 * Retrieves metadata and content of all posts.
 * @returns {Promise<Object[]>} An array of objects containing the metadata and content of all posts.
 */
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

/**
 * Retrieves metadata and content of featured posts.
 * @returns {Promise<Object[]>} An array of objects containing the metadata and content of featured posts.
 */
export async function getFeaturedPosts() {
  try {
    const allPosts = await getAllPosts();
    return allPosts.filter(post => post.isFeatured);
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}
