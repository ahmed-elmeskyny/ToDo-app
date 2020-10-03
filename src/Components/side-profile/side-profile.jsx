import React from "react";
import "./side-profile.scss";
import pdp from "../assets/pdp2.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
const SideProfile = () => (
  <div className="side-profile">
    <div className="profile-data">
      <div
        className="profile-img"
        style={{ backgroundImage: `url(${pdp})` }}
      ></div>
      <div className="tasks-data">
        <div className="tasks">
          <h4 className="number">222</h4>
          <span>to do</span>
        </div>
        <div className="tasks completed">
          <h4 className="number">10</h4>
          <span>completed</span>
        </div>
        <div className="tasks upcoming">
          <h4 className="number">5</h4>
          <span>upcom.</span>
        </div>
      </div>
    </div>
    <div className="pages">
      <ul>
        {" "}
        <li>
          {" "}
          Tasks <AiOutlineArrowRight className="svg" />
        </li>
        <li>
          {" "}
          Upcoming events <AiOutlineArrowRight className="svg" />
        </li>
        <li>
          {" "}
          Notes <AiOutlineArrowRight className="svg" />
        </li>
      </ul>
    </div>
  </div>
);
export default SideProfile;
