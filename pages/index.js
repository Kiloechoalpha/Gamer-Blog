import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts"; // Importing FeaturedPosts component
import Hero from "../components/home-page/hero"; // Importing Hero component
import { getFeaturedPosts } from "../lib/post-util"; // Importing getFeaturedPosts function

// Functional component for the Home page
function HomePage(props) {
    return(
        <Fragment>
            {/* Rendering the Hero component */}
            <Hero />
            {/* Rendering the FeaturedPosts component with posts passed as props */}
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
}

// Function to fetch static props for the Home page
export function getStaticProps(){
    // Fetching featured posts using getFeaturedPosts function
    const FeaturedPosts = getFeaturedPosts();
    return {
        // Returning props with featured posts
        props: {
            posts: FeaturedPosts
        }
    }
}

export default HomePage;
