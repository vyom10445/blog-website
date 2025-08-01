import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import posts from "../../utils/Data";
import { useParams } from "react-router-dom";

export default function Single() {
  const { postId } = useParams();
  const postData = posts.find((post) => post.id.toString() === postId);
  return (
    <div className="single">
      <SinglePost postData={postData} />
      <Sidebar />
    </div>
  );
}
