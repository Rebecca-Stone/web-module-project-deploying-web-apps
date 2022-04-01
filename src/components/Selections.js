import React from "react";
import "./styles/Selections.css";

const Selections = (props) => {
  const { rockClick, paperClick, scissorsClick } = props;

  return (
    <section className="selections-wrapper">
      <button onClick={() => rockClick()} id="rock">
        Rock
      </button>
      <button onClick={() => paperClick()} id="paper">
        Paper
      </button>
      <button onClick={() => scissorsClick()} id="scissors">
        Scissors
      </button>
    </section>
  );
};

export default Selections;
