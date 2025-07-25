import React from "react";
import "./contact.css";
import Sidebar from "../../components/sidebar/Sidebar";
export default function Contact() {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <h1 className="contactTitle">Contact Us</h1>
        <p className="contactDescription">
          Feel free to reach out to us with any questions or inquiries. We're
          here to help!
        </p>

        <div className="contactInfo">
          <p>
            <strong>Email:</strong> vyom@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 123456789
          </p>
          <p>
            <strong>Address:</strong> 123 street, city , state
          </p>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
