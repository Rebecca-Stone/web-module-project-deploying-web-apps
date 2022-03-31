import "./App.css";

function App() {
  return (
    <div className="App">
      {/* header component starts */}
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
      {/* header component ends */}
      {/* results component starts*/}
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
      {/* results component ends*/}
      {/* selections component starts*/}
      <section className="selections-wrapper">
        <button className="rock">Rock</button>
        <button className="paper">Paper</button>
        <button className="scissors">Scissors</button>
      </section>
      {/* selections component starts */}
      <section className="footer">Footer</section>
    </div>
  );
}

export default App;
