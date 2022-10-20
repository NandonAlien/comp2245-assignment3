"use strict";

//Board layout
//Setting each div inside game board as a CSS class square
var State=[];
var id= 0
var Rowch1=[1,2,3]
var Rowch2=[4,5,6]
var Rowch3 =[7,8,9]
var Columnch1=[1,4,7]
var Columnch2=[2,5,8]
var Columnch3=[3,6,9]
var DiaCh1=[1,5,9]
var DiaCh2=[3,5,]
var Opoint =[];
var Xpoint =[];
function Win(x){

    switch (x) {
        case 1:
            document.getElementById('status').innerHTML = "Congratulations! X is the Winner!"
            break;
    
        case 2:
            document.getElementById('status').innerHTML = "Congratulations! O is the Winner!"
            break;
    }
    document.getElementById('status').classList.add("you-won");
}
function Choice(x, o){

    if(x==3){
        Win(1) 
        return true;
       }
       else if(o == 3){
       Win(2) 
        return true;
       }
    return false;
}
function ArrayCheck(Arr){
    var owin =0
    var xwin =0
for(let sa of Arr)
        {for (let x of Xpoint)
         {
            if(sa == x){
               xwin++
            }          
         }
         for (let o of Opoint)
         {
            if(sa == o){
                owin++
            }          
         }
        }
      return  Choice(xwin,owin);
}
function WinCondRow(){
   if( ArrayCheck(Rowch1) == true)        
    return true;
    if( ArrayCheck(Rowch2) == true)        
    return true;
    if( ArrayCheck(Rowch3) == true)        
    return true;
    
    return false;
}
function WinCondColumn(){
    if( ArrayCheck(Columnch1) == true)        
     return true;
     if( ArrayCheck(Columnch2) == true)        
     return true;
     if( ArrayCheck(Columnch3) == true)        
     return true;
     
     return false;
 }
 function WinCondDiag(){
    if( ArrayCheck(DiaCh1) == true)        
     return true;
     if( ArrayCheck(DiaCh2) == true)        
     return true;
     
     return false;
 }
function WinCond(){
    //check rows
    if(WinCondRow() ==true){
        return;
    }
    //Check Columns
    if(WinCondColumn() ==true){
        return;
    }
    //Check Diag
    if(WinCondDiag() ==true){
        return;
    }
    }



window.addEventListener('DOMContentLoaded', (event) => {


   

var board = document.querySelectorAll("#board div");

function Determinant(x){

     if (State.length> 9){return; }   

     switch (State.length%2) {
        case 0:            
            document.getElementById(x).innerHTML="X";
            document.getElementById(x).classList.add("X");
            Xpoint.push(x)
            break;    
        case 1:
            document.getElementById(x).innerHTML="O";
            document.getElementById(x).classList.add("O");
            Opoint.push(x)
            break;
        default:
            document.getElementById(x).innerHTML="X";
            document.getElementById(x).classList.add("X");
            Xpoint.push(x)
            break;
    }

    State.push(0);    
    WinCond()
}

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
function ErasorS(x){
if(x!=0){
    eras = x.length
for(var i = 0; i < eras; i++)
    {
        document.getElementById(x).innerHTML = null
        x.pop()
    }
}
}



function Erasor(){
    console.log("Start")
    ErasorS(Opoint);
    ErasorS(Xpoint);
    document.getElementById('status').innerHTML = null
    document.getElementById('status').classList.remove("you-won"); 
    console.log("Stop")
}

  var NGme=document.getElementsByClassName("btn");
    NGme.onclick = function(){Erasor};


});








//Check for the winner
//div with id = status is where the message should be placed in
//  using innerHTML or textContent property to place in the status div
//Adding class you-won to status div
  

//Restarting the game
//clicks a new game button
//checking for X and O in square for deletion
//use click event
