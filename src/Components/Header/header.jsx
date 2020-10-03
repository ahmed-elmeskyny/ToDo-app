import React from "react";
import "./header.scss";
import CusttomButton from "../CusttomButton/custtom-button";
import { BiTask } from "react-icons/bi";
const Header = () => (
  <div className="header">
    <div className="container">
      <div className="logo">
        {" "}
        <BiTask></BiTask> <span>To Do.</span>
      </div>
      <CusttomButton> Login Out </CusttomButton>
    </div>
    <div className="empty"></div>
  </div>
);

export default Header;
