"use strict";
window.onload = puzzledisplay;

var LEFT = 300;
var TOP = 300;  

//function sets up the puzzle pieces in order with the backgound image.
function puzzledisplay(){
	var a= document.getElementById("overall");
	a.puzzlearea;

	var shufflebuttn=document.getElementById("shufflebutton");
    shufflebuttn.onclick=function(){shufflePuzzle();}; 


	var p =document.getElementById("puzzlearea");
	var ch = p.children; // div elements of the puzzlearea
	var x; // for loop increment 
	var y = 0; //increments style.left value of tile
	var count;
	for(x=0; x < ch.length; x++){
		ch[x].classList.add("puzzlepiece");
		ch[x].style.top = "0px";
		ch[x].style.left = y+"px";
		ch[x].style.backgroundPosition=  "-" + ch[x].style.left + " " + "-" + ch[x].style.top;
		ch[x].onclick = function(){
			if (CanSquareMove(this.style.left,this.style.top)){
				var TileLoc=MoveTiles(this.style.top,this.style.left); // tile location
             	this.style.top=TileLoc[0];
               	this.style.left=TileLoc[1];
               	this.style.transition = "all 0.2s";
				}
			};

						

		ch[x].onmouseover=function(){
            if (CanSquareMove(this.style.left,this.style.top)){
                this.classList.add("movablepiece");
            }
           };
        
       ch[x].onmouseout=function(){
        	if (CanSquareMove(this.style.left,this.style.top)){
            	this.classList.remove("movablepiece");
            	}
       		};
		
		y+= 100;
			if(y > 300){
				y=0
				for(x=4; x<ch.length; x++){
					ch[x].classList.add("puzzlepiece");
					ch[x].style.top +=100 +"px";
					ch[x].style.left = y+"px";
					ch[x].style.backgroundPosition=  "-" + ch[x].style.left + " " + "-" + ch[x].style.top; 
					ch[x].onclick = function(){
						if (CanSquareMove(this.style.left,this.style.top)){
							var TileLoc=MoveTiles(this.style.top,this.style.left); // tile location
                			this.style.top=TileLoc[0];
                			this.style.left=TileLoc[1];
                			this.style.transition = "all 0.2s";
							}
						};



							

					ch[x].onmouseover=function(){
            			if (CanSquareMove(this.style.left,this.style.top)){
                			this.classList.add("movablepiece");
            				}
           				};
        
        			ch[x].onmouseout=function(){
        				if (CanSquareMove(this.style.left,this.style.top)){
            				this.classList.remove("movablepiece");
            				}
       				 	};

					y+=100;

					if(y>300){
						y=0;
						for(x=8; x<ch.length; x++){
							ch[x].classList.add("puzzlepiece");
							ch[x].style.top +=200 +"px";
							ch[x].style.left = y+"px";
							ch[x].style.backgroundPosition=  "-" + ch[x].style.left + " " + "-" + ch[x].style.top; 
							ch[x].onclick = function(){
								if (CanSquareMove(this.style.left,this.style.top)){
										var TileLoc=MoveTiles(this.style.top,this.style.left); // tile location
                						this.style.top=TileLoc[0];
                						this.style.left=TileLoc[1];
                						this.style.transition = "all 0.2s";
										}
									};



								
							ch[x].onmouseover=function(){
            					if (CanSquareMove(this.style.left,this.style.top)){
                						this.classList.add("movablepiece");
            						}
           						};
        
        					ch[x].onmouseout=function(){
        						if (CanSquareMove(this.style.left,this.style.top)){
            						this.classList.remove("movablepiece");
            						}
       				 			};

							y+=100;

							if(y>300){
								y=0;
								for(x=12; x<ch.length; x++){
									ch[x].classList.add("puzzlepiece");
									ch[x].style.top +=300 +"px";
									ch[x].style.left = y+"px";
									ch[x].style.backgroundPosition=  "-" + ch[x].style.left + " " + "-" + ch[x].style.top; 
									ch[x].onclick = function(){
										if (CanSquareMove(this.style.left,this.style.top)){
											var TileLoc=MoveTiles(this.style.top,this.style.left); // tile location
                							this.style.top=TileLoc[0];
                							this.style.left=TileLoc[1];
                							this.style.transition = "all 0.2s";
										}
									};
										

									ch[x].onmouseover=function(){
            							if (CanSquareMove(this.style.left,this.style.top)){
                							this.classList.add("movablepiece");
            								}
           								};
        
        							ch[x].onmouseout=function(){
        								if (CanSquareMove(this.style.left,this.style.top)){
            								this.classList.remove("movablepiece");
            								}
       				 					};

									y+=100;
								} //end of fourth for loop
							}
						}//end of third for loop
					}

				} // end of second for loop
			}

		} // end of first and big for loop



		
} // end of puzzledisplay function



function CanSquareMove(aPos,bPos){// This function checks if a tile with the requested coordinates is movable and if it is, it returns true , and if it isnt it returns false 
//  if left plus 100 equal 300 and or top plus 100 equal 300 then return true, and so on
    var TopPosition=parseInt(aPos,10);
    var LeftPosition=parseInt(bPos,10);
    
    if(LeftPosition+100 === LEFT  && TopPosition=== TOP || LeftPosition-100 === LEFT && TopPosition=== TOP || TopPosition+100 === TOP && LeftPosition=== LEFT ||  TopPosition-100 === TOP && LeftPosition=== LEFT){
        return true;
    }else {
            return false;
        }

}


function MoveTiles(aPos, bPos){// This function gets the current tile coordinates and stores in a temp value. It then returns the new value which is the empty tile , and sets the empty tile values to the old tile values.
    var OLDTopPos=aPos;
    var OLDLeftPos=bPos;
    aPos=TOP+"px";
    bPos=LEFT+"px";
    TOP=parseInt(OLDTopPos);
    LEFT=parseInt(OLDLeftPos);
    return [aPos,bPos];
}


function shufflePuzzle(){ // This function when called, is used to shuffle the board pieces , but stays in a solvable state
//choose nmumber from list of CanSquareMove tiles and moves the tiles around a random amount of times, in a reasonable amount of time.
    var puzzlearea=document.getElementById("puzzlearea");
    
    var chh=puzzlearea.children;
    MovingList=[];
    
    var MovingList = [];
    for(var j = 0; j < 50; j++){
        for(var k = 0; k < chh.length; k++){
            if(CanSquareMove(chh[k].style.left, chh[k].style.top)){
                MovingList.push([chh[k],k]);
            }
        }
        if(MovingList.length != 0){
            var Val = Math.floor(Math.random() * MovingList.length);
            var lsst = MoveTiles(MovingList[Val][0].style.left, MovingList[Val][0].style.top);
            MovingList[Val][0].style.left = lsst[0];
            MovingList[Val][0].style.top = lsst[1];
        }  
        MovingList = [];
    }
}









