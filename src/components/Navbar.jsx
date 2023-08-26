import React from 'react'
import { Link } from "react-router-dom";
import { styled } from 'styled-components';

function Navbar() {
    const Nav = styled.nav`
      .navbar-list {
        display: flex;
        gap: 4.8rem;
        li {
          list-style: none;
          .navbar-link {
            &:link,
            &visited {
              display: inline-block;
              text-decoration: none;
              font-size: 1.8rem;
              font-weight: 500;
              text-transform: uppercase;
              color: ${({ theme }) => theme.colors.black};
              transition: color o.3s linear;
            }
            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }
    `;
    return (
        <Nav>
            <div className='menuIcon'>
            <ul className='navbar-list'>
                <li>
                    <Link to={"/"} className='navbar-link'>Home</Link>
                </li>
                <li>
                    <Link to={"about"} className='navbar-link'>About</Link>
                </li>
                <li>
                    <Link to={"contacts"} className='navbar-link'>Contact</Link>
                </li>
                <li>
                    <Link to={"services"} className='navbar-link'>Services</Link>
                </li>
            </ul>
            </div>
        </Nav>
    );
   
};


export default Navbar