//document.querySelector(".exit-frame").style.visibility="hidden";
var GapPositionX;
var GapPositionY;
var GapPositionArrayIndex=0;
var GapPositionArrayX=[];
GapPositionArrayX[GapPositionArrayIndex]=1;
var GapPositionArrayY=[];
GapPositionArrayY[GapPositionArrayIndex]=4;

let complete=document.querySelector(".complete"); 
let giveUp=document.querySelector(".give-up");
let counts=document.querySelector(".counts");
let back=document.querySelector(".back");
let close=document.querySelector(".close");
let letter=document.querySelector(".letter");
let welcome=document.querySelector(".welcome img");
let note=document.querySelector(".note");
let logo=document.querySelector(".logo");
let logoImage=document.querySelector(".logo img");
let pen=document.querySelector(".pen");
let penImage=document.querySelector(".pen img");

let moves=0;
counts.innerText=moves;
var puzzle = document.querySelectorAll("div.puzzle > div");
var hint = document.querySelector(".hint");
giveUp.style.visibility="hidden";
var puzzlepieces = document.querySelectorAll("div.puzzle > div");

document.querySelector("#b1").style.backgroundImage="url('images/b1@2x.png')";
document.querySelector("#b2").style.backgroundImage="url('images/b2@2x.png')";
document.querySelector("#b3").style.backgroundImage="url('images/b3@2x.png')";
document.querySelector("#b4").style.backgroundImage="none";

document.querySelector("#b5").style.backgroundImage="url('images/b5@2x.png')";
document.querySelector("#b6").style.backgroundImage="url('images/b6@2x.png')";
document.querySelector("#b7").style.backgroundImage="url('images/b7@2x.png')";
document.querySelector("#b8").style.backgroundImage="url('images/b9@2x.png')";

document.querySelector("#b9").style.backgroundImage="url('images/b8@2x.png')";
document.querySelector("#b10").style.backgroundImage="url('images/b10@2x.png')";
document.querySelector("#b11").style.backgroundImage="url('images/b11@2x.png')";
document.querySelector("#b12").style.backgroundImage="url('images/b12@2x.png')";

document.querySelector("#b13").style.backgroundImage="url('images/b13@2x.png')";
document.querySelector("#b14").style.backgroundImage="url('images/b14@2x.png')";
document.querySelector("#b15").style.backgroundImage="url('images/b15@2x.png')";
document.querySelector("#b16").style.backgroundImage="url('images/b16@2x.png')";


//alert("bhaskar");


puzzlepieces.forEach(function(piece) {piece.addEventListener("click", pieceClicked)});
					 

function pieceClicked()
	{
		var currentImage=this.style.backgroundImage;
		
		var classString = this.className;
		var x=classString[4];
		var y=classString[5];
		x=parseInt(x);
		y=parseInt(y);
/*
		var blankString=findBlank();
		
		var blankx=blankString[4];
		var blanky=blankString[5];
*/
		var ok=putTheImage();
		
		if(document.querySelector("#b4").className=="pos-14")
		{
			checkCompletion();
		}
		//this.style.backgroundImage="none";
		//alert(".pos-"+x+(y+1));
		//right check
		var temp;
		function putTheImage(){
			
		 if (y<4) 
		 {
			 if( document.querySelector(".pos-"+x+(y+1)).style.backgroundImage=="none") 
			 {		
					document.querySelector(".pos-"+x+(y+1)).style.backgroundImage=currentImage;
					document.querySelector(".pos-"+x+y).style.backgroundImage="none";

					temp=document.getElementsByClassName("pos-"+x+(y+1))[0].id;
					document.getElementsByClassName("pos-"+x+(y+1))[0].id=document.getElementsByClassName("pos-"+x+y)[0].id;
					document.getElementsByClassName("pos-"+x+y)[0].id=temp;
				
				// var counttmp=counts.innerHTML;
			 //  counttmp=parseInt(counttmp)+1;
			   //	counts.innerHTML=counttmp;
			   moves++
			   counts.innerText=moves;
                           if(moves===100)
                             {
                              giveUp.style.visibility="visible";
                              giveUp.style.opacity=1;
                              }
				 
			GapPositionArrayIndex++;
			GapPositionArrayX[GapPositionArrayIndex]=x;
			GapPositionArrayY[GapPositionArrayIndex]=y;
			new Audio("Sound/tick.mp3").play();
				 return 0;
			 }
       }
       //Checking if white tile on the left
       if (y>1) 
	   {
		   if (document.querySelector(".pos-"+x+(y-1)).style.backgroundImage=="none") {
			    document.querySelector(".pos-"+x+(y-1)).style.backgroundImage=currentImage;
			    document.querySelector(".pos-"+x+y).style.backgroundImage="none";

			 	temp=document.getElementsByClassName("pos-"+x+(y-1))[0].id;
			 	document.getElementsByClassName("pos-"+x+(y-1))[0].id=document.getElementsByClassName("pos-"+x+y)[0].id;
			 	document.getElementsByClassName("pos-"+x+y)[0].id=temp;
			   	

			   moves++
			  counts.innerText=moves; 
                          if(moves===100)
                             {
                              giveUp.style.visibility="visible";
                              giveUp.style.opacity=1;
                              }
			   
			GapPositionArrayIndex++;
			GapPositionArrayX[GapPositionArrayIndex]=x;
			GapPositionArrayY[GapPositionArrayIndex]=y;
			 	new Audio("Sound/tick.mp3").play();
			   return 0;
			   
         }
       }
         //Checking if white tile is above
       if (x > 1) {
         if (document.querySelector(".pos-"+(x-1)+(y)).style.backgroundImage=="none") 
		 {
			 document.querySelector(".pos-"+(x-1)+(y)).style.backgroundImage=currentImage;
			 document.querySelector(".pos-"+x+y).style.backgroundImage="none";
			 
			 	temp=document.getElementsByClassName("pos-"+(x-1)+(y))[0].id;
			 	document.getElementsByClassName("pos-"+(x-1)+(y))[0].id=document.getElementsByClassName("pos-"+x+y)[0].id;
			 	document.getElementsByClassName("pos-"+x+y)[0].id=temp;
			 

       			   moves++
                          counts.innerText=moves;
                         if(moves===100)
                             {
                              giveUp.style.visibility="visible";
                              giveUp.style.opacity=1;
                              }
			 
			GapPositionArrayIndex++;
			GapPositionArrayX[GapPositionArrayIndex]=x;
			GapPositionArrayY[GapPositionArrayIndex]=y;
			 new Audio("Sound/tick.mp3").play();
			 return 0;
		 }      
	   }
       //Checking if white tile is below
       if (x<4) {
         if (document.querySelector(".pos-"+(x+1)+y).style.backgroundImage=="none") {
			 document.querySelector(".pos-"+(x+1)+(y)).style.backgroundImage=currentImage;
			 document.querySelector(".pos-"+x+y).style.backgroundImage="none";
			 
			 	temp=document.getElementsByClassName("pos-"+(x+1)+y)[0].id;
			 	document.getElementsByClassName("pos-"+(x+1)+y)[0].id=document.getElementsByClassName("pos-"+x+y)[0].id;
			 	document.getElementsByClassName("pos-"+x+y)[0].id=temp;
			 

                           moves++;
			   counts.innerText=moves;
                           if(moves===100)
                             {
                              giveUp.style.visibility="visible";
                              giveUp.style.opacity=1;
                              }
			 
			GapPositionArrayIndex++;
			GapPositionArrayX[GapPositionArrayIndex]=x;
			GapPositionArrayY[GapPositionArrayIndex]=y;
			 new Audio("Sound/tick.mp3").play();
			 return 0;
		 }
	   }
			
			
			
		}
		checkCompletion();
		var congratsTrue;
		function checkCompletion()
		{
			var k=1;
			for(var i=1;i<5;i++)
				{
					for(var j=1;j<5;j++)
						{
							//var k=i+j;
							var m=String(i)+String(j);
							
									if(document.getElementById("b"+k).className=="pos-"+m)
									{
										console.log("id=b"+k+" and pos-"+m);
										congratsTrue=true;
										k++;
									}
									else
										{
											congratsTrue=false;
											break;
										}
								
						}
					if(!congratsTrue)
						{
							break;
						}
				}
			if(congratsTrue)
				{
				//alert("Congratulations!");
                 TheCompletionFunction();       
                }
                                        	

				}
			
		}

	

function hintFunc()
{
	
new Audio("Sound/tick.mp3").play();
 for(var i=0;i<puzzle.length;i++)
 {
	  let k=(i+1);
	  if(k==4){k++;}
	  document.querySelector("#b" + k).innerHTML=k;
 }
 setTimeout(function(){
							for(var i=0;i<puzzle.length;i++)
							{
								let k=(i+1);
								document.querySelector("#b" + k).innerHTML="";
							}	
 					  }, 3000);

}




hint.addEventListener("click", hintFunc);

back.addEventListener("click", function(){
	if(moves>=1){
		for(i=0;i<2;i++)
		{
		new Audio("Sound/tick.mp3").play();
		}
		var gap=GapPositionArrayIndex;
		for(i=0;i<gap;i++)
			{
					getBack();
			}
		
	}

});
function getBack()
		{
		
	moves--;
	counts.innerText=moves;
					var tempGapIndex=GapPositionArrayIndex-1;
		console.log(document.querySelector(".pos-"+GapPositionArrayX[tempGapIndex]+GapPositionArrayY[tempGapIndex]).style.backgroundImage);
		var currentBackground=document.querySelector(".pos-"+GapPositionArrayX[GapPositionArrayIndex]+GapPositionArrayY[GapPositionArrayIndex]).style.backgroundImage;
		document.querySelector(".pos-"+GapPositionArrayX[GapPositionArrayIndex]+GapPositionArrayY[GapPositionArrayIndex]).style.backgroundImage=document.querySelector(".pos-"+GapPositionArrayX[GapPositionArrayIndex-1]+GapPositionArrayY[GapPositionArrayIndex-1]).style.backgroundImage;
		document.querySelector(".pos-"+GapPositionArrayX[GapPositionArrayIndex-1]+GapPositionArrayY[GapPositionArrayIndex-1]).style.backgroundImage=currentBackground;
		//id needs to be switched too as below
		
		
		
				temp=document.getElementsByClassName("pos-"+GapPositionArrayX[tempGapIndex]+GapPositionArrayY[tempGapIndex])[0].id;
			 	document.getElementsByClassName("pos-"+GapPositionArrayX[tempGapIndex]+GapPositionArrayY[tempGapIndex])[0].id=document.getElementsByClassName("pos-"+GapPositionArrayX[GapPositionArrayIndex]+GapPositionArrayY[GapPositionArrayIndex])[0].id;
			 	document.getElementsByClassName("pos-"+GapPositionArrayX[GapPositionArrayIndex]+GapPositionArrayY[GapPositionArrayIndex])[0].id=temp;
			 

		
		
		
		GapPositionArrayIndex--;
		}
close.addEventListener("click",function(){
	new Audio("Sound/tick.mp3").play();
document.querySelector(".exit-frame").style.visibility="visible";
});
document.querySelector(".no").addEventListener("click", function(){
	new Audio("Sound/tick.mp3").play();
document.querySelector(".exit-frame").style.visibility="hidden";
});

document.querySelector(".yes").addEventListener("click",function(){
	document.querySelector(".exit-frame").style.visibility="hidden";
	giveUp.click(); 
});


giveUp.addEventListener("click", function(){
//document.querySelector(".exit-frame").style.visibility="hidden";
	new Audio("Sound/tick.mp3").play();
	TheCompletionFunction();
});

//-----------------the end function

function TheCompletionFunction()
{
	

	let k=1;
	
	var myVar = setInterval(hideAnimation, 30);	
	function hideAnimation()
	{
	
		
		//document.querySelector("#b" + k).style.visibility="hidden";
		document.querySelector("#b" + k).style.transform='scale(0)';
		
		
		k++;
		if(k>16)
			{
				clearInterval(myVar);
			}
	}
									
								
								
							
	
	
 setTimeout(function(){
	 
							
	 
	 			
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 //------------------------rest function
	 
	 
	 complete.style.visibility="visible";
complete.style.opacity=1;
setTimeout(function(){
                      letter.style.opacity=1;
					welcome.style.opacity=1;
	welcome.style.visibility="visible";
                      const element = document.getElementById('wecum')
	document.getElementById("letterID").classList.remove('letter');
	document.getElementById("letterID").offsetWidth;
element.classList.remove('welcome'); // reset animation
void element.offsetWidth; // trigger reflow
element.classList.add('welcome'); // start animation

	document.getElementById("letterID").classList.add('letter');
                      setTimeout(function(){
                                            note.style.opacity=1;
                                            logo.style.opacity=1;
                                            //logoImage.style.transform="rotate(360deg)";
                                            penImage.style.left="84%";
                                            document.querySelector(".sin1").style.opacity=1;
                                            setTimeout(function(){document.querySelector(".sin2").style.opacity=1;},500);
                                            setTimeout(function(){document.querySelector(".sin3").style.opacity=1;},900);
					    //penImage.style.transform="rotate(360deg)";   
				            //welcome.style.transform="scale(1.24)";
                                            setTimeout(function(){
                                                                  //logoImage.style.transform="rotate(0deg)";
                                                                  penImage.style.top="0px";
                                                                  setTimeout(function(){penImage.style.transform="rotate(360deg)";},100);		    	
                                                                  //penImage.style.transform="rotate(10deg)"; 
                                                                    },1400);
                                            },300);
                          },500);
	 //------------------timeout
 					  }, 250);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}