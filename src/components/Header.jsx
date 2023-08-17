import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <>
          <div className="head">
      <Link to={"/"}>
        <img
          src="https://images.sk-static.com/images/media/profile_images/artists/963536/huge_avatar"
          alt="logo"
        />
      </Link>
              <Navbar />
          </div>
    </>
  );
};

export default Header;
