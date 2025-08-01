import "./posts.css";
import Post from "../post/Post.jsx";
import posts from "../../utils/Data.jsx";

export default function Posts() {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post postData={post} />
      ))}
    </div>
  );
}
