import React from 'react'
import "./index.scss"

const SpeakersContent = ({title,desc}) => {
  return (
    <>
        <div className="col-12 col-lg-3 descSlide" data-aos="fade-up" data-aos-duration="2000">
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    </>
  )
}

export default SpeakersContent