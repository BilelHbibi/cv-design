import React, { useState } from "react";
import { portfolio } from "../data/data";
import { Visibility } from "@mui/icons-material";
import "../css/portfolio.css";
import Heading from "../common/Heading"

const allCategory=["all", ...new Set(portfolio.map((item)=>item.category))]

const Portfolio = () => {
  const [List, setList] = useState(portfolio);

 const filterItems=(name)=>{
    const newItems=portfolio.filter((item)=>item.category===name)
    setList(newItems)

    if(name==="all"){
        setList(portfolio)
    }
 }

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
          <div className="catButton">
            {allCategory.map((name)=>(
                <button className="primaryBtn" onClick={()=>filterItems(name)} data-aos="zoom-out-down">
                    {name}
                </button>
            ))}
          </div>
          <div className="content grid3">
            {List.map((val) => {
              return (
                <div className="box" data-aos="fade-up">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>

                  <div className="overlay">
                    <h3>{val.title}</h3>
                    <span>{val.name}</span>
                    <Visibility />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
};

export default Portfolio;
