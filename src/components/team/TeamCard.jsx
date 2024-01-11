import React from "react";
import { team } from "../data";

const TeamCard = () => {
  return (
    <>
      <div className="teamCard padding">
        <div className="container">
          <div className="grid4">
            {team.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <div className="social">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-tiktok"></i>
                  </div>
                </div>

                <div className="text">
                  <h3>{val.title}</h3>
                  <h4>{val.desc}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
