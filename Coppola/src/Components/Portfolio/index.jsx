import React, { useState } from 'react';
import "./index.scss"
import UseFetch from '../../Hooks/UseFetch/index';

import PortfolioCard from '../PortfolioCard'

const Portfolio = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false)

    const url = 'http://localhost:3000/portfolio';

    const Callback = (data) => {
        if(!status){
          console.log(data);
          setData(data);
          setStatus(true)
        }
      };

      UseFetch(url, Callback);

  return (
    <>
    <section id='portfolio'>
        <div className="container">
        <div className="portfolioCards">
            <div className="row">
                {
                    data && data.map((item)=>(
                        <PortfolioCard key={item.id} {...item}/>
                    ))
                }
            </div>
        </div>
        </div>
    </section>
    
    </>
  )
}

export default Portfolio