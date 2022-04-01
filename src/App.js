import React, { useState } from "react";

// component imports
import Header from "./components/Header";
import Results from "./components/Results";
import Image from "./components/Image";
import Selections from "./components/Selections";
import Footer from "./components/Footer";
// style import
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
  const [computer, setComputer] = useState("");
  //only used in game
  const [compChoice, setCompChoice] = useState(null);
  // hooked up through props
  const [userCount, setUserCount] = useState(0);
  // hooked up through props
  const [compCount, setCompCount] = useState(0);
  // hooked up through props
  const [gameResult, setGameResult] = useState("");
  // hooked up through props
  const [userImage, setUserImage] = useState(null);
  // hooked up through props
  const [compImage, setCompImage] = useState(null);

  // hooked up through props
  const rockClick = (evt) => {
    setCompChoice(Math.random());
    getComputerChoice(compChoice);
    setUserImage("fas fa-hand-rock");
    setUser("rock");
    game(user, computer);
    console.log("rock");
  };

  // hooked up through props
  const paperClick = (evt) => {
    setCompChoice(Math.random());
    getComputerChoice(compChoice);
    setUserImage("fas fa-hand-paper");
    setUser("paper");
    game(user, computer);
    console.log("paper");
  };

  // hooked up through props
  const scissorsClick = (evt) => {
    setCompChoice(Math.random());
    getComputerChoice(compChoice);
    setUserImage("fas fa-hand-scissors");
    setUser("scissors");
    game(user, computer);
    console.log("scissors");
  };

  // hooked up through props
  const resetClick = (evt) => {
    setCompChoice(null)
    setUser("")
    setComputer("")
    setUserCount(0)
    setCompCount(0)
    setGameResult("")
    setUserImage(null)
    setCompImage(null)
    console.log("reset");
  }

  // works as expected
  function getComputerChoice(computerChoice) {
    if (computerChoice <= 0.34) {
      setCompImage("fas fa-hand-rock");
      setComputer("rock");
    } else if (computerChoice <= 0.67) {
      setCompImage("fas fa-hand-paper");
      setComputer("paper");
    } else if (computerChoice > 0.67) {
      setCompImage("fas fa-hand-scissors");
      setComputer("scissors");
    }
  }

  // works as expected
  const game = (user, computer) => {
    if (user === computer) {
      setGameResult("It's a Tie!");
    } else if (user === "rock" && computer === "scissors") {
      setGameResult("You Win!");
      setUserCount(userCount + 1);
    } else if (user === "paper" && computer === "rock") {
      setGameResult("You Win!");
      setUserCount(userCount + 1);
    } else if (user === "scissors" && computer === "paper") {
      setGameResult("You Win!");
      setUserCount(userCount + 1);
    } else {
      setGameResult("You Lose!");
      setCompCount(compCount + 1);
    }
  };

  return (
    <div id="app" className="App">
      <Header userCount={userCount} compCount={compCount} />
      <Results gameResult={gameResult} />
      <Image compImage={compImage} userImage={userImage} />
      <Selections
        rockClick={rockClick}
        paperClick={paperClick}
        scissorsClick={scissorsClick}
      />
      <Footer resetClick={resetClick} />
    </div>
  );
};

export default App;
