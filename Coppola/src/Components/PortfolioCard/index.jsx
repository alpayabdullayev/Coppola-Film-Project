import React from "react";
import "./index.scss"

const PortfolioCard = ({img,title,desc}) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 portfolioCard">
        <div className="portfolioImg">
          <img
            src={img}
            alt=""
          />
        </div>
        <div className="portfolioContent">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
