import React from "react";
import './styles/Selections.css'

const Selections = (props) => {
  return (
    <section className="selections-wrapper">
      <button className="rock">Rock</button>
      <button className="paper">Paper</button>
      <button className="scissors">Scissors</button>
    </section>
  );
};

export default Selections;
