import React from "react";
import { coursecard } from "../data";
import Title from "../Global/title/Title";
import Online from "../courses/Online";

const CourseHome = () => {
  return (
    <div className="courseHome">
      <div className="container">
        <Title
          title="OUR COURSES"
          subtitle="Explore Our Popular Online Courses"
        />
        <div className="grid3">
          {coursecard.splice(0, 3).map((val) => (
            <>
              <div className="coursesCard">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <div className="title">
                      <h2>{val.title}</h2>
                    </div>
                    <div className="degree">
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <span>(5.0)</span>
                    </div>

                    <div className="log flex">
                      <img src="./images/back.webp" alt="" />
                      <p>{val.name}</p>
                    </div>

                    <p>{val.time}</p>
                  </div>
                </div>
                <span className="price">{val.price}</span>
                <button className="border-btn">ENROLL NOW !</button>
              </div>
            </>
          ))}
        </div>
        <Online />
      </div>
    </div>
  );
};

export default CourseHome;
