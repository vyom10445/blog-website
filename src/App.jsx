import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import UserPage from "./pages/UserPage";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Route path="/" element={<Home blogs={blogs} />}></Route>
      <Route
        path="/add-blog"
        element={<AddBlog onAddBlog={handleAddBlog} />}
      ></Route>
      <Route path="/users" element={<Home users={users} />}></Route>
    </>
  );
}

export default App;
