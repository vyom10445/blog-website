import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import posts from "../../utils/Data";

export default function Single() {
  return (
    <div className="single">
      <SinglePost posts={postData} />
      <Sidebar />
    </div>
  );
}
