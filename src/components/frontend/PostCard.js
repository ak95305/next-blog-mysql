import Link from "next/link";

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`;

    return (
        <Link href={url} className="post-card">
            <header className="post-card-header">
                {post.feature_image && (
                    <div
                        className="post-card-image"
                        style={{
                            backgroundImage: `url(${post.feature_image})`,
                        }}
                    ></div>
                )}
                {post.tags && (
                    <div className="post-card-tags">
                        {" "}
                        {/* <Tags
                            post={post}
                            visibility="public"
                            autolink={false}
                        /> */}
                    </div>
                )}
                {post.featured && <span>Featured</span>}
                <h2 className="post-card-title">{post.title}</h2>
            </header>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <div className="post-card-avatar">
                        {post.primary_author.profile_image ? (
                            <img
                                className="author-profile-image"
                                src={post.primary_author.profile_image}
                                alt={post.primary_author.name}
                            />
                        ) : (
                            <img
                                className="default-avatar"
                                src="/images/icons/avatar.svg"
                                alt={post.primary_author.name}
                            />
                        )}
                    </div>
                    <span>{post.primary_author.name}</span>
                </div>
                <div className="post-card-footer-right">
                    <div>10 Min</div>
                </div>
            </footer>
        </Link>
    );
};

export default PostCard;
