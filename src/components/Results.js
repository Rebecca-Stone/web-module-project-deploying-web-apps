import React from "react";
import "./styles/Results.css";

const Results = (props) => {
  const { gameResult } = props;

  return (
      <div className="display-wrapper">
        <h2>{ gameResult }</h2>
      </div>
  );
};

export default Results;
