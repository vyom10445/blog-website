import React from "react";
import "./about.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="aboutTitle">About Us</h1>
        <p className="aboutDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          expedita nulla magni repudiandae dolorem provident id neque ullam aut
          ipsam officia, et culpa vero. Quos corporis voluptatem voluptate
          voluptatibus illum.
        </p>
        <p className="aboutDescription">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          cupiditate fugiat, quis voluptatem repudiandae ad odit saepe eius
          soluta voluptatum veniam itaque! Nam repellat ab dolor commodi ad
          dolores molestiae!
        </p>
        <p className="aboutDescription">
          Thank you for visiting! We hope you enjoy your time here .
        </p>
      </div>
      <Sidebar />
    </div>
  );
}
