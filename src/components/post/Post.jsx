import "./post.css";
import { Link } from "react-router-dom"; //

export default function Post({ postData }) {
  return (
    <div className="post">
      <img className="postImg" src={postData.img} alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{postData.category}</span>
        </div>
        <Link to={`/post/${postData.id}`} className="link">
          {" "}
          <span className="postTitle">{postData.title}</span>
        </Link>
        <hr />
        <span className="postDate">{postData.timeAgo}</span>
      </div>
      <p className="postDescription">{postData.content}</p>
    </div>
  );
}
