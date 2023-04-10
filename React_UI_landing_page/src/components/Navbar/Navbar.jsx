import React, { useState } from 'react'
import './navbar.css'
import logo from '../../img/logo.png'
import { BiAlignRight } from "react-icons/bi";
const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(false);
    const clicked = () => {
        toggleMenu ? settoggleMenu(false) : settoggleMenu(true);
    }
    return (
        <>
            <div className="navbar">
                <div className="navbar_img">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar_links">
                    <p><a href="#openai">What is OpenAI?</a></p>
                    <p><a href="#earlyAccess">Get early Access</a></p>
                    <p><a href="#documentation">Documentation</a></p>
                    <p><a href="#socialMedia">Connect Us</a></p>
                </div>
                <div className="navbar_sign">
                    <p>Sign In</p>
                    <button>Sign Up</button>
                </div>
                <div className="navbar_menu" onClick={clicked}>
                    <BiAlignRight />
                    {
                        toggleMenu &&
                        <>
                            <div className="navbar_links-toggle">
                                <p><a href="#openai">What is OpenAI?</a></p>
                                <p><a href="#earlyAccess">Get early Access</a></p>
                                <p><a href="#documentation">Documentation</a></p>
                                <p><a href="#socialMedia">Connect Us</a></p>
                                <p>Sign In</p>
                                <button>Sign Up</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar