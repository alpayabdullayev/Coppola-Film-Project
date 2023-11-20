import React from 'react'
import "./index.scss"
import Button from '../Button'

const FestivalProqram = () => {
  return (
    <>
    <section id='festivalProgram'>
        <div className="container">
            <div className="festivalSect">
                <div className="festival__title">
                    <h4>FESTIVAL PROGRAMME</h4>
                </div>


                <div className="festivalDate">
                    <div className="date row">
                        <p className='col-12 col-lg-1'>07 MAY</p>
                        <h5 className='col-12 col-lg-5'>THE PIANO TEACHER</h5>
                        <h2 className='col-12 col-lg-3'>11:00 / 15:00 / 19:30</h2>
                        
                        <div className="more col-12 col-lg-3">
                            <a className='viewdi' href="">View More</a>
                            <div className="bilets">
                            <Button rengi={"white"} text={"Get Tickets"}/>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="festivalDate">
                    <div className="date row">
                        <p className='col-12 col-lg-1'>08 MAY</p>
                        <h5 className='col-12 col-lg-5'>THE SONGS OF MY FATHER</h5>
                        <h2 className='col-12 col-lg-3'>11:00 / 15:00 / 19:30</h2>
                        
                        <div className="more col-12 col-lg-3">
                            <a className='viewdi' href="#">View More</a>
                            <div className="bilets">
                            <Button rengi={"white"} text={"Get Tickets"}/>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="festivalDate">
                    <div className="date row">
                        <p className='col-12 col-lg-1'>09 MAY</p>
                        <h5 className='col-12 col-lg-5'>STRAWBERRIES</h5>
                        <h2 className='col-12 col-lg-3'>11:00 / 15:00 / 19:30</h2>
                        
                        <div className="more col-12 col-lg-3">
                            <a className='viewdi' href="">View More</a>
                            <div className="bilets">
                            <Button rengi={"white"} text={"Get Tickets"}/>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="festivalDate">
                    <div className="date row">
                        <p className='col-12 col-lg-1'>09 MAY</p>
                        <h5 className='col-12 col-lg-5'>THE PIANO TEACHER</h5>
                        <h2 className='col-12 col-lg-3'>11:00 / 15:00 / 19:30</h2>
                        
                        <div className="more col-12 col-lg-3">
                            <a className='viewdi' href="">View More</a>
                            <div className="bilets">
                            <Button rengi={"white"} text={"Get Tickets"}/>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default FestivalProqram