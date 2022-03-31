import React from "react";
import "./styles/Header.css";

const Header = (props) => {
  const { userCount, compCount } = props;

  return (
    <section className="header-wrapper">
      <div className="title-wrapper">
        <h1>Rock, Paper, Scissors</h1>
        <h2>How many times can you win?</h2>
      </div>

      <div className="score-wrapper">

        <div className="user-score">
          <h1>Your score: </h1>
          <h2 className="scoreKeepUser">{userCount}</h2>
        </div>

        <div className="computer-score">
          <h1>My Score: </h1>
          <h2 className="scoreKeepComp">{compCount}</h2>
        </div>

      </div>
    </section>
  );
};

export default Header;
