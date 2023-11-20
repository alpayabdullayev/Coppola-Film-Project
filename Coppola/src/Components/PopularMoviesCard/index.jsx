import React from "react";
import "./index.scss"
import Button from "../Button";

const PopularMoviesCard = ({id,img,name,price}) => {
  return (
    <>
      <div className="col-12 col-lg-2 col-md-4 popularCard">
        <div className="imgMovie">
                <a href="">            <img
            src={img}
            alt=""
            /></a>
                <Button rengi={"black"} text={"Add to Card"}/>
        </div>
        <h4>{name}</h4> 
        <p>${price}</p>
      </div>
    </>
  );
};

export default PopularMoviesCard;
