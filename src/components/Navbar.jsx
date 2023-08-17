import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className='menuIcon'>
            <ul className='navbar-list'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"about"}>About</Link>
                </li>
                <li>
                    <Link to={"contacts"}>Contact</Link>
                </li>
                <li>
                    <Link to={"services"}>Services</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar