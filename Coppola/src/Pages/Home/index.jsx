import React from 'react'
import Navbar from '../../Layout/Navbar'
import Header from '../../Components/Header'
import Portfolio from '../../Components/Portfolio'
import FestivalProqram from '../../Components/FestivalProgram'
import Audience from '../../Components/Audience'
import PopularMovies from '../../Components/PopularMovies'
import Magazine from '../../Components/Magazine'
import Speakers from '../../Components/Speakers'
import Tickets from '../../Components/Tickets'
import BrandLogo from '../../Components/BrandLogo'
import Footer from '../../Layout/Footer'


import AOS from 'aos'
import'aos/dist/aos.css'
AOS.init();
const Home = () => {
  return (
    <>
    
    <Navbar/>
    <div className="container-wrapper">
      <Header/>
      <main>
        <Portfolio/>
        <FestivalProqram/>
        <Audience/>
        <PopularMovies/>
        <Magazine/>
        <Speakers/>
        <Tickets/>
        <BrandLogo/>
      </main>
        <footer>
          <Footer/>
        </footer>
    </div>

    
    </>
  )
}

export default Home