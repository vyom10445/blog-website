import "./navbar.css";

function NavBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOG OUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="./public/car.jpg" alt="" />
        <i className=" topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default NavBar;
