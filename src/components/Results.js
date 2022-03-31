import React from "react";

const Results = (props) => {
  return (
    <section className="results-wrapper">
      {/* display component starts */}
      <div className="display-wrapper">
        <div className="win">Win</div>
        <div className="tie">Tie</div>
        <div className="lose">Lose</div>
      </div>
      {/* display component ends*/}
      {/* image component starts*/}
      <div className="imageChoice-wrapper">
        <div className="userChoice-image">this is what the user picked</div>
        <div className="computerChoice-image">
          this is what the computer picked
        </div>
      </div>
      {/* image component ends*/}
    </section>
  );
};

export default Results;
