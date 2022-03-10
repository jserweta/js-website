import React from "react";

const ValidationBox = ({ message, type }) => {
  return <div className={`validationMessage ${type}`}>{message}</div>;
};

export default ValidationBox;
