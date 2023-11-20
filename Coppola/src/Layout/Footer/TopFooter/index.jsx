import React from 'react'
import "./index.scss"



const TopFooter = () => {
  return (
    <>
    
        <div className="topFooter">
            <div className="container">
            <div className="row justifyContent">
                <div className="col-12 col-md-6">
                    <div className="bearLogo">
                        <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/footer-img.png" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6 row topFoooterLinks">
                    <ul className='topFoooterLinksUl'>
                        <li>WHAT</li>
                        <li>ABOUT US</li>
                        <li>HELP AND FAQ</li>
                    </ul>
                    <ul className='topFoooterLinksUl'>
                        <li>TEAM</li>
                        <li>CONTACT US</li>
                        <li>SPEAKERS</li>
                    </ul>
                    <ul className='topFoooterLinksUl'>
                        <li>PROGRAM</li>
                        <li>SHOP</li>
                        <li>BLOG</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    
    </>
  )
}

export default TopFooter