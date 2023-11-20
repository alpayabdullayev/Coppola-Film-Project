import React from 'react'
import { useState } from 'react'
import "./index.scss"

const NavbarNav = () => {

const [active, setActive] = useState(false)


const handleClick = () =>{
    setActive(!active)
}

  return (
    <>
        <div id="navbar-nav">
            <div className="navbarNav-cotent">
                <div className="navbarNav-Logo">
                    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-main-light-height14px.png" alt="" />
                </div>
                <div className="hamburger" onClick={(e)=>{handleClick(e)}}>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            </div>
        </div>


            <div className={`navbarNavSidebar ${active ? 'active' : ''}`}>
                <ul className='navbarNavSideBarUl'>
                    <li className='Home'><a href="">Home
                    </a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Restauramty</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

    
    </>
  )
}

export default NavbarNav