import React from "react";

const TicketsCard = ({title,type,price,desc}) => {
  return (
    <>
      <div className="ticket">
        <div className="ticketLeft">
          <h2>{title}</h2>
          <p>{type}</p>
          <p>Price:{price}$</p>

          <div className="lorem7">
            <p>{desc}</p>
          </div>
        </div>
        <div className="ticketRight">
          <h5 className="h5Buy">BUY</h5>
          <span className="circleSpan"></span>
        </div>
      </div>
    </>
  );
};

export default TicketsCard;
