import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="/car.jpg" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>vyom</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quos
          incidunt aliquid quibusdam temporibus amet earum, consequuntur officia
          voluptatibus, provident molestiae corrupti, aliquam libero
          necessitatibus beatae ut. Consequuntur, tempore animi. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Quo quos incidunt
          aliquid quibusdam temporibus amet earum, consequuntur officia
          voluptatibus, provident molestiae corrupti, aliquam libero
          necessitatibus beatae ut. Consequuntur, tempore animi.Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Quo quos incidunt
          aliquid quibusdam temporibus amet earum, consequuntur officia
          voluptatibus, provident molestiae corrupti, aliquam libero
          necessitatibus beatae ut. Consequuntur, tempore animi.Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Quo quos incidunt
          aliquid quibusdam temporibus amet earum, consequuntur officia
          voluptatibus, provident molestiae corrupti, aliquam libero
          necessitatibus beatae ut. Consequuntur, tempore animi.Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Quo quos incidunt
          aliquid quibusdam temporibus amet earum, consequuntur officia
          voluptatibus, provident molestiae corrupti, aliquam libero
          necessitatibus beatae ut. Consequuntur, tempore animi.Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Quo quos incidunt
          aliquid quibusdam temporibus amet earum, consequuntur officia
          voluptatibus, provident molestiae corrupti, aliquam libero
          necessitatibus beatae ut. Consequuntur, tempore animi.Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Quo quos incidunt
          aliquid quibusdam temporibus amet earum, consequuntur officia
          voluptatibus, provident molestiae corrupti, aliquam libero
          necessitatibus beatae ut. Consequuntur, tempore animi.
        </p>
      </div>
    </div>
  );
}
