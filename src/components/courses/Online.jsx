import React from "react";
import Title from "../Global/title/Title";
import { online } from "../data";

const Online = () => {
  return (
    <>
      <Title title="COURSES" subtitle="Browse Our Online Courses" />
      <div className="grid6">
        {online.map((val) => (
          <>
            <div className="onlineCourses">
              <div className="box">
                <div className="img">
                  <img src={val.cover1} alt="" />
                  <img src={val.cover2} alt="" />
                </div>
                <div className="title">
                  <span>{val.title}</span>
                </div>
                <div className="price">{val.number}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Online;
