import React from 'react'
import SectionTitle from '../SectionTitle'
import MagazineContent from '../MagazineContent'


const Magazine = () => {
  return (
    <>
    
    <section id='magazine'>
        <div className="container">
            <div className="magazineSect row">
                <MagazineContent/>
            </div>
        </div>
    </section>

    </>
  )
}

export default Magazine