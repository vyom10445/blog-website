import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="/car.jpg" alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        temporibus ad minus tempore, accusamus officiis recusandae nesciunt
        voluptatibus rem ipsum! Nemo nisi perspiciatis et dicta qui debitis
        dolorum reiciendis magni?tempore, accusamus officiis recusandae nesciunt
        voluptatibus rem ipsum! Nemo nisi perspiciatis et dicta qui debitis
        dolorum reiciendis magni?tempore, accusamus officiis recusandae nesciunt
        voluptatibus rem ipsum! Nemo nisi perspiciatis et dicta qui debitis
        dolorum reiciendis magni?tempore, accusamus officiis recusandae nesciunt
        voluptatibus rem ipsum! Nemo nisi perspiciatis et dicta qui debitis
        dolorum reiciendis magni?
      </p>
    </div>
  );
}
