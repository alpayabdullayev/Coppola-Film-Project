import React from 'react'
import "./index.scss"
import SectionTitle from '../SectionTitle'
import SpeakersContent from '../SpeakersContent'
import SpeakersSlider from '../SpeakersSlider'

const Speakers = () => {
  return (
    <>
    
    <section id='speakers'>
        <div className="container">
            <div className="speakersSect">
                <SectionTitle rengi={"blackH4"} title={"SPEAKERS"}/>
                <div className="speakersContentSection row">
                    <SpeakersContent title={"LEARNING FROM EXPERTS"} desc={"Et pri magna evertitur. Ne qui doctus interesset, ad eum ullum accusam, te nam iusto iisque omittam. Elit nobis magnas iust."}/>
                    <SpeakersSlider/>   
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Speakers