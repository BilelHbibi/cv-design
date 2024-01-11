import React, { useState } from "react";
import { ask } from "../data";

const Ask = () => {
  const [click, setClick] = useState(false);
  function toggle(index) {
    if (click === index) {
      return setClick(false);
    }
    setClick(index)
  }

  return (
    <>
      <div className="ask">
        {ask.map((val, index) => (
          <div className="box">
            <button className="btn flexSB" onClick={() => toggle(index)} key={index}>
              <h2>{val.title}</h2>
              <span>{click===index?<i class="fa-solid fa-chevron-down"></i>:<i class="fa-solid fa-chevron-right"></i>}</span>
            </button>
            {click===index?(
              <div className="para">
              <p>{val.desc}</p>
            </div>
            ):null}
          </div>
        ))}
      </div>
    </>
  );
};

export default Ask;
