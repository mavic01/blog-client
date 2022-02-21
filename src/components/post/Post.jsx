import SinglePost from "../singlepost/SinglePost"
import "./post.css"

const Post = ({posts}) => {
    return (
        <div className="post">
            {posts.map(p => (
                <SinglePost post={p} />
            ))}
        </div>
    )
}

export default Post