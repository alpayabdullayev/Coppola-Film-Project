import React from 'react'
import "./idnex.scss"
import { useState } from 'react';
import UseFetch from '../../Hooks/UseFetch';
import TicketsCard from '../TicketsCard';

const TicketsContent = () => {


    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false)

    const url = 'http://localhost:3000/tickets';

    const Callback = (data) => {
        if(!status){
        //   console.log(data);
          setData(data);
          setStatus(true)
        }
      };

      UseFetch(url, Callback);


  return (
    <>
    
    <div className="ticketsContent">
            {
                data && data.map((item)=>(
                    <TicketsCard key={item.id} {...item}/>
                ))
            }
    </div>
    
    </>
  )
}

export default TicketsContent