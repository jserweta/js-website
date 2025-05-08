import React from "react";
import "./button.scss";

const Button = ({ text, file, link }) => {
  let href;

  if (file !== undefined) {
    href = `${file}?dl=`;
  } else if (link !== undefined) {
    href = `${link}`;
  }

  return (
    <a href={href !== null ? href : ""} className="button">
      {text}
    </a>
  );
};

export default Button;
