import React from 'react'
import { useState } from 'react';
import "./index.scss"


import { FaInstagram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import NavbarNav from '../NavbarNav';



const Navbar = () => {

    const [active, setActive] = useState(false)

    const handleClick = (e) =>{
        setActive(!active)

    }

  return (
    <>
    <nav>
        <div className="navbar-links">
            <div className="hamburger" onClick={(e)=>{handleClick(e)}}>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className="logo">
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-width-20px.png" alt="" />
            </div>


            <div className="social-icons">
                <span><FaInstagram /></span>
                <span><FaReact /></span>
                <span><FaYoutube /></span>
                <span><FaTwitter /></span>
            </div> 
        </div>
    </nav>
    

    <div className={`sidebar ${active ? 'active' : ''}`}>
        <ul className='navbar-links-SideBar'>
                <li className='Home'><a href="">Home
                </a></li>
                <li><a href="">About</a></li>
                <li><a href="">Restauramty</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact</a></li>
            </ul>
    </div>

    <NavbarNav/>

    
    </>
  )
}

export default Navbar