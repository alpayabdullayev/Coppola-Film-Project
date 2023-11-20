import React from "react";
import "./index.scss";
import SectionTitle from "../SectionTitle";
import PopularMoviesCard from "../PopularMoviesCard";
import UseFetch from "../../Hooks/UseFetch";
import { useState } from "react";

const PopularMovies = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(false);
  const [category, setCategory] = useState("ALL");
  const [searchValue, setSearchValue] = useState("");

  const url = "http://localhost:3000/popularMovies";

  const Callback = (data) => {
    if (!status) {
      console.log(data);
      setData(data);
      setStatus(true);
    }
  };

  UseFetch(url, Callback);

  const handleClick = () => {
    const sortedData = [...data].sort((a, b) => (b.name > a.name ? 1 : a.name > b.name ? -1 : 0));
    setData(sortedData);
    // console.log(sortedData);
};

const handleClickA = () =>{
    const sortedDataA = [...data].sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    setData(sortedDataA)

}

const handleClickPrice =() =>{
    const sortedPrice = [...data].sort((a,b)=>(a.price > b.price ? 1 :b.price >a.price ? -1 : 0))
    setData(sortedPrice)
}


const handleInputChange = (e) => {
    setSearchValue(e.target.value);
};


  const handleCategoryClick = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <section id="popularMovies">
        <div className="container">
          <div className="popularMovies">
            <SectionTitle title={"POPULAR MOVIES"} />




            <div className="ButtonsSect row">

                <div className="inputSearch">
                <input
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={searchValue}
                className="search" placeholder="Search..."
            />
                </div>

              <div className="sortButtons">
                <button onClick={(e) => handleClick(e)}>sort Z-A</button>
                <button onClick={(e) => handleClickA(e)}>sort A-Z</button>
                <button onClick={(e) => handleClickPrice(e)}>Ucuzdan Bahaya</button>
              </div>


              <div className="CategoryIdButtons">
                <button onClick={(e) => handleCategoryClick(e)} value="ALL">
                  ALL
                </button>
                <button onClick={(e) => handleCategoryClick(e)} value="1">
                  Comedy
                </button>
                <button onClick={(e) => handleCategoryClick(e)} value="2">
                  Documentary
                </button>
                <button onClick={(e) => handleCategoryClick(e)} value="3">
                  Drama
                </button>
                <button onClick={(e) => handleCategoryClick(e)} value="4">
                  Fantasy
                </button>
                <button onClick={(e) => handleCategoryClick(e)} value="5">
                  Romance
                </button>
              </div>
            </div>

            <div className="popularCards row">
              {data &&
                data.filter((item) => item.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
                .filter(
                    (item) =>
                      category === "ALL" ||
                      item.categoryId === parseInt(category)
                  )
                  .map((item) => (
                    <PopularMoviesCard
                      className={`card ${item.display ? "block" : "none"}`}
                      key={item.id}
                      {...item}
                    />
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularMovies;
