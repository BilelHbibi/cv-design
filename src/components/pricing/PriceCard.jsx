import React from "react";
import { price } from "../data";

const PriceCard = () => {
  return (
    <>
      <div className="priceCard grid4 padding">
      {price.map((val) => (
        <>
          <div className="box">
            <span>{val.title}</span>
            <h3>${val.montant}</h3>
            <p>{val.desc}</p>
            <button className="border-btn">GET STARTED</button>
          </div>
        </>
      ))}
      </div>
    </>
  );
};

export default PriceCard;
