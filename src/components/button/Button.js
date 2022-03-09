import React from "react";
import "./button.scss";

const Button = ({ text, file }) => {
  return <a href={`${file}?dl=`}className="button">{text}</a>;
};

export default Button;
