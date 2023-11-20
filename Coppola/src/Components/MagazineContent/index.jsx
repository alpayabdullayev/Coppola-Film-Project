import React from "react";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import "./index.scss"


const MagazineContent = () => {

    

  return (
    <>
      <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
        <SectionTitle rengi={"blackH4"} title={"MAGAZINE"} />

        <div className="sectionContentMagazine">
            <p><a href="">PRODUCERS</a> DECEMBER 10</p>
            <h1>INTERVIEW WITH MOVIE <br /> PRODUCER PAUL GANGE</h1>
            <p className="descMagazine">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="magazineButton">
            <Button  rengi={"white"} text={"VIEW MORE"}/>
            </div>
        </div>
      </div>
      <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
        <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/blog-list-h4.jpg" alt="" />
      </div>
    </>
  );
};

export default MagazineContent;
