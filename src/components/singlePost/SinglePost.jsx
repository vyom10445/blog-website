import "./singlePost.css";

export default function SinglePost({ postData }) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={postData.img} alt="" />
        <h1 className="singlePostTitle">
          {postData.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>{postData.author}</b>
          </span>
          <span className="singlePostDate">{postData.timeAgo}</span>
        </div>
        <p className="singlePostDesc">{postData.content}</p>
      </div>
    </div>
  );
}
