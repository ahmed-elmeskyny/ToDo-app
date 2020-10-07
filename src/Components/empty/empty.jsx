import React from "react";
import "./empty.scss";
import { ImFilesEmpty } from "react-icons/im";
import CusttomButton from "../CusttomButton/custtom-button";

const EmptyTask = ({ children, isButton, isDiscription, ...otherProps }) => (
  <div className={isDiscription ? "empty-discription" : "empty-task"}>
    <ImFilesEmpty
      style={{ fontSize: "55px", marginBottom: "10px", opacity: "0.5" }}
    ></ImFilesEmpty>
    <p>{children}</p>
    {isButton ? (
      <CusttomButton inverted {...otherProps}>
        {" "}
        create task
      </CusttomButton>
    ) : null}
  </div>
);

export default EmptyTask;
