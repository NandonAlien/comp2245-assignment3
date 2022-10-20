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
            document.getElementById('status').innerHTML = "Congratulations! X is the Winner!";
            break;
    
        case 2:
            document.getElementById('status').innerHTML = "Congratulations! O is the Winner!";
            break;
    }
    document.getElementById('status').classList.add("you-won");
    State.length = 9
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

function StateChecker(x){
    if(State.length != 0){
    for (let a of State){
        if (a == x)
            return true;
    }}

    if (State.length>= 9){return true;} 

        return false;
    
    


}
//LOADED DOM
window.addEventListener('DOMContentLoaded', (event) => {


   

var board = document.querySelectorAll("#board div");

function Determinant(x){
   
if (StateChecker(x)!= true){
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

    State.push(x);    
    WinCond()
}


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
        square.onclick=function(){Determinant(square.getAttribute("id"))};
        
    };
function ErasorX(){
if(Xpoint.length!=0){
   for(let s of Xpoint)
   {
    document.getElementById(s).innerHTML="";
    document.getElementById(s).classList.remove("X");

   }
   Xpoint=[];
}
}
function ErasorO(){
    if(Opoint.length!=0){
       for(let s of Opoint)
       {
        document.getElementById(s).innerHTML="";
        document.getElementById(s).classList.remove("O");
    
       }
       Opoint=[];
    }
    }

    

function Erasor(){

    ErasorO();
    ErasorX();
    document.getElementById('status').innerHTML = "Move your mouse over a square and click to play an X or an O."
    document.getElementById('status').classList.remove("you-won"); 
    State = []
}

  document.querySelector(".btn").onclick = function(){Erasor()};



});




 