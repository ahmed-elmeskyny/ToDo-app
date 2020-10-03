import React from "react";
import "./custtom-button.scss";

const CusttomButton = ({ children, ...otherProps }) => (
  <button className="button">{children}</button>
);

export default CusttomButton;
