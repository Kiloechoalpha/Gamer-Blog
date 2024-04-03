import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

/**
 * Renders a page displaying all posts.
 * @param {object} props - The props object containing posts to be displayed.
 * @returns {JSX.Element} - Returns JSX to render the AllPosts component with the provided posts.
 */
function AllPostsPage(props) {
  return (
    <AllPosts posts={props.posts}/>
  );
}

/**
 * Retrieves all posts to be displayed on the page.
 * @returns {object} - Returns an object containing props with all posts.
 */
export function getStaticProps() {
  // Retrieve all posts
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  };
}

export default AllPostsPage;
