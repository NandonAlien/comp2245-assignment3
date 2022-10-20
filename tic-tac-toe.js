"use strict";

//Board layout
//Setting each div inside game board as a CSS class square
var State=[];
var id= 0
window.addEventListener('DOMContentLoaded', (event) => {

    

var board = document.querySelectorAll("#board div");

function Determinant(x){

     //if (State.length> 9){return; }   

     switch (State.length%2) {
        case 0:            
            document.getElementById(x).innerHTML="X";
            document.getElementById(x).classList.add("X");
            break;    
        case 1:
            document.getElementById(x).innerHTML="O";
            document.getElementById(x).classList.add("O");
            break;
        default:
            document.getElementById(x).innerHTML="X";
            document.getElementById(x).classList.add("X");
            break;
    }
    State.push(0)
    
};

function Hover(x){
            document.getElementById(x).classList.add('hover');
}

function Leave(x){
            document.getElementById(x).classList.remove('hover')
}

for(let square of board){
    id = id+1
        square.classList.add('square');
        square.setAttribute("id", id )
        square.onmouseover =function(){Hover(square.getAttribute("id"))};
        square.onmouseout =function(){Leave(square.getAttribute("id"))};
        square.onclick=function(){Determinant(square.getAttribute("id",))};
        
    };





});







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
