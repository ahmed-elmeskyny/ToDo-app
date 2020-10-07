import React from "react";
import "./custtom-button.scss";

const CusttomButton = ({ children, inverted, ...otherProps }) => (
  <button className={inverted ? "inverted" : "button"} {...otherProps}>
    {children}
  </button>
);

export default CusttomButton;
