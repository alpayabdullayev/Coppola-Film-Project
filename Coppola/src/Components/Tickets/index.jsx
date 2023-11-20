import React from 'react'
import "./index.scss"
import SectionTitle from '../SectionTitle'
import TicketsContent from '../TicketsContent'

const Tickets = () => {
  return (
    <>
    
    <section id='tickets'>
        <div className="container">
            <div className="ticketsSect">
                <SectionTitle rengi={"blackH4"} title={"TICKETS"}/>

                <TicketsContent/>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Tickets