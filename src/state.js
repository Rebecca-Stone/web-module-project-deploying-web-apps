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
  random2,
  random3,
} from "././selectionTypes";

const [user, setUser] = useState(empty);
const [computer, setComputer] = useState(empty);

const [compChoice, setCompChoice] = useState(0);

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
  setCompChoice(random2);
  clickHandler(choice, src);
};

const scissorsClick = (evt) => {
  const choice = scissors;
  const src = scissorsSrc;
  setCompChoice(random3);
  clickHandler(choice, src);
};

function clickHandler(choice, src) {
  setUser(choice);
  setUserImage(src);
  getComputerChoice(compChoice);

  function getComputerChoice(compChoice) {
    if (compChoice <= 10) {
      setCompImage(rockSrc);
      setComputer(rock);
    } else if (compChoice <= 20 && compChoice > 10) {
      setCompImage(paperSrc);
      setComputer(paper);
    } else if (compChoice >= 20 && compChoice > 20) {
      setCompImage(scissorsSrc);
      setComputer(scissors);
    }
    game(user, computer);
  }
}

const game = (user, computer) => {
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
};
