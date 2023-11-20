import React from 'react'
import "./index.scss"

import { FaInstagram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const BottomFooter = () => {
  return (
    <>
    
    <div className="bottomFooter">
        <div className="container">
            <div className="footerBootom row">
                <div className="justify">
                <div className="social-icons col-12 col-md-7">
                <span><FaInstagram /></span>
                <span><FaReact /></span>
                <span><FaYoutube /></span>
                <span><FaTwitter /></span>
                </div> 
                <ul>
                    <li>
                        1316 Via del parione <br />
                        Florence CA 90291 iTALY
                    </li>
                </ul>
                
                </div>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default BottomFooter