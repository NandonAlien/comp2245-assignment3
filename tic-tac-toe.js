"use strict";

//Board layout
//Setting each div inside game board as a CSS class square


window.addEventListener('DOMContentLoaded', (event) => {


let board = document.querySelectorAll("#board div");

for(let square of board){

        square.classList.add('square')
}

});


//X or O to the screen
//Initializing Empty Array for tracking state of the game
//use innerHTML or textContent property to make X or O show up

var State=[];

//Changing styles using hover

//Cheat Prevention
//making the user not able to change the value of a square that 
//already has X or O


//Check for the winner
//div with id = status is where the message should be placed in
//  using innerHTML or textContent property to place in the status div
//Adding class you-won to status div
  

//Restarting the game
//clicks a new game button
//checking for X and O in square for deletion
//use click event
