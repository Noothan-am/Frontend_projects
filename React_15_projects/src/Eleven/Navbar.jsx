import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, socials } from './data'
import logo from './logo.svg'

const Navbar = () => {
     const [show, setShow] = useState(false);
     const divref = useRef(null);
     const linkref = useRef(null);
     function handleClick() {
          setShow(!show);
     }
     useEffect(() => {
          const height = linkref.current.getBoundingClientRect().height;
          if (show) {
               divref.current.style.height = `${height}px`;
          } else {
               divref.current.style.height = `0rem`;
          }
     }, [show])

     return (
          <div className='nav-center'>
               <div className='nav-header'>
                    <img src={logo} className='logo' alt='logo' />
                    <button className='nav-toggle' onClick={handleClick}>
                         <FaBars />
                    </button>
               </div>
               <div className='links-container' ref={divref}>
                    <ul className='links' ref={linkref}>
                         {links.map(link => {
                              return (
                                   <li key={link.id}>
                                        <a href={link.url}>{link.text}</a>
                                   </li>
                              )
                         })}
                    </ul>
               </div>
               <ul className='social-icons'>
                    {socials.map(social => {
                         return (
                              <li key={social.id}>
                                   <a href={social.url}>{social.icon}</a>
                              </li>
                         )
                    })}
               </ul>
          </div>
     )
}

export default Navbar
