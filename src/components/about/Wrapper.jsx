import React from "react";
import { wrapper } from "../data";
import CountUp from "react-countup";

const Wrapper = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container flexSB">
          {wrapper.map((val) => (
            <>
              <div className="box flex">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h3>
                    <CountUp enableScrollSpy end={val.number} duration={2} className="counter"/>
                  </h3>
                  <span>{val.name}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
