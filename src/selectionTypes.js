import React from "react";

// computer selection 
export const random = () => Math.floor(Math.random() * 3)


// user selections
export const rock = 0;
export const paper = 1;
export const scissors = 2;
export const empty = "";


// image options
export const rockSrc = "fas fa-hand-rock";
export const paperSrc = "fas fa-hand-paper";
export const scissorsSrc = "fas fa-hand-scissors";

// game outcomes
export const win = "You Won!";
export const tie = "You Tied!";
export const lose = "You Lost!";