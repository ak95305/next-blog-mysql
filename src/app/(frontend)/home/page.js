import PostCard from "@/components/frontend/PostCard";
import PostsModel from "@/models/postsModel";


const posts = [
    {
        feature_image: "https://images.unsplash.com/photo-1682695798256-28a674122872?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 1,
        slug: "slugh",
        tags: "tags",
        featured: true,
        primary_author: {
            profile_image: "image",
            name: "name",            
        }
    }
];

const postsDB = new PostsModel();
const postsList = postsDB.getPosts();
// console.log(postsList);

export default function Home() {
  return (
    <div className="container">
        <section className="post-feed">
            {posts.map((node) => (
                // The tag below includes the markup for each post - components/common/PostCard.js
                <PostCard key={node.id} post={node} />
            ))}
        </section>
        {/* <Pagination pageContext={pageContext} /> */}
    </div>
  );
}