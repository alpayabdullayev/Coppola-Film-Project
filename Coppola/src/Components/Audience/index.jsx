import React from 'react'
import "./index.scss"
import SectionTitle from '../SectionTitle'
import VideoAudience from '../VideoAudience'
import Documentary from '../Documentary'

const Audience = () => {
  return (
    <>
    
    <section id='audience'>
        <div className="container">
            <div className="audienceSect">
                <SectionTitle  title={"AUDIENCE CHOICE"}/>
                <div className="audiContent">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <VideoAudience/>    
                        </div>
                        <div className="col-12 col-md-6 infoAudi">
                           <Documentary/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Audience