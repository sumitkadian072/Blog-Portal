import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4uLjTffAzrGcxLFzuZR1t0KoTfj9xIlVTA&usqp=CAU"
          alt=""
        />
        <p>
          Hi there! My name is Sumit Singh, and I'm thrilled to welcome you to
          my blog.
          {/* I started this blog to share my knowledge and experiences
          with others who share the same passion as me. When I'm not writing
          blog posts, you can usually find me persuing my passion. I try to live
          my life with positivity and purpose.I'm excited to share my expertise
          with you and help you learn something new. */}
          {/* My vision for this blog is
          to have a place where people can share their knowledge and experience
          to help others. I hope to inspire and motivate you, and I want to help
          others achieve their dreams and live their best lives. */}
          Thank you for stopping by my blog, and I hope you find the information
          and inspiration you're looking for. Don't hesitate to reach out if you
          have any questions or just want to say hello. Let's embark on this
          journey together!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"></span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
