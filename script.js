"use strict";

// Select Elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling dice functionally

btnRoll.addEventListener("click", function () {
  //Generate a random dice
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);
  // Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // Check for rolled 1: if true , switch to next player
});

document.querySelector(".btn--hold").addEventListener("click", function () {});

document.querySelector(".btn--new").addEventListener("click", function () {});
