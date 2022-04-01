import React, { useState } from "react";
import {
  rock,
  paper,
  scissors,
  empty,
  rockSrc,
  paperSrc,
  scissorsSrc,
  win,
  tie,
  lose,
  random,
} from "././selectionTypes";
import AppInside from "./components/AppInside";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(empty);
  const [computer, setComputer] = useState(empty);
  const [compChoice, setCompChoice] = useState(random);
  const [userCount, setUserCount] = useState(0);
  const [compCount, setCompCount] = useState(0);
  const [userImage, setUserImage] = useState(null);
  const [compImage, setCompImage] = useState(null);
  const [gameResult, setGameResult] = useState(empty);


  const rockClick = (evt) => {
    const choice = rock;
    const src = rockSrc;
    setCompChoice(random);
    clickHandler(choice, src);
  };


  const paperClick = (evt) => {
    const choice = paper;
    const src = paperSrc;
    setCompChoice(random);
    clickHandler(choice, src);
  };


  const scissorsClick = (evt) => {
    const choice = scissors;
    const src = scissorsSrc;
    setCompChoice(random);
    clickHandler(choice, src);
  };


  function clickHandler(choice, src) {
    setUser(choice);
    setUserImage(src);
    getComputerChoice(compChoice);
  }


  function getComputerChoice(compChoice) {
    if (compChoice === 0) {
      setCompImage(rockSrc);
      setComputer(rock);
    } else if (compChoice === 1) {
      setCompImage(paperSrc);
      setComputer(paper);
    } else if (compChoice === 2) {
      setCompImage(scissorsSrc);
      setComputer(scissors);
    }
    game(user, computer);
  }

  function game(user, computer) {
    if (user === computer) {
      setGameResult(tie);
    } else if (user === rock && computer === scissors) {
      setGameResult(win);
      setUserCount(userCount + 1);
    } else if (user === paper && computer === rock) {
      setGameResult(win);
      setUserCount(userCount + 1);
    } else if (user === scissors && computer === paper) {
      setGameResult(win);
      setUserCount(userCount + 1);
    } else {
      setGameResult(lose);
      setCompCount(compCount + 1);
    }
  }

  return (
    <div id="app" className="App">
      <AppInside
        userCount={userCount}
        compCount={compCount}
        gameResult={gameResult}
        compImage={compImage}
        userImage={userImage}
        rockClick={rockClick}
        paperClick={paperClick}
        scissorsClick={scissorsClick}
      />
    </div>
  );
};

export default App;
