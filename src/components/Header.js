import React from "react";

const Header = (props) => {
  return (
    <section className="header-wrapper">
      {/* title component starts */}
      <div className="title-wrapper">
        <h1>Rock, Paper, Scissors</h1>
        <h2>How many times can you win?</h2>
      </div>
      {/* title component ends */}
      {/* score component starts */}
      <div className="score-wrapper">
        {/* user score component starts */}
        <div className="user-score">
          <h1>Your score: </h1>
          <h2>0</h2>
        </div>
        {/* user score component ends */}
        {/* computer score component starts */}
        <div className="computer-score">
          <h1>Computer Score: </h1>
          <h2>0</h2>
        </div>
        {/* computer score component ends */}
      </div>
      {/* score component ends*/}
    </section>
  );
};

export default Header;
