import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
      <Mainheader>
          {/* <div className="head"> */}
      <Link to={"/"}>
        <img className="logo"
          src="https://images.sk-static.com/images/media/profile_images/artists/963536/huge_avatar"
          alt="logo"
        />
      </Link>
              <Navbar />
          {/* </div> */}
    </Mainheader>
  );
};
const Mainheader = styled.header`
padding:0 4.8rem;
height:10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

.logo{
  height:auto;
  width: 10rem;
  max-width: 100%;
}
`;


export default Header;
