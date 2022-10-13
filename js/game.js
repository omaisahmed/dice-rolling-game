c=0;
b=0;
var bool=0
var randomdice1=0;
var randomdice2=0;
myVar1=0;
myVar2=0;
var timer;
var d=1;
var r=1;
function abc()
{

	var a=document.getElementById("div1");
		a.style.fontSize=48;
	if (c==0)
	{

		a.innerHTML=b;

        b=b+1;
	}
	if (b==11)
	{

$(document).ready(function(){
	$('.modal').modal({show:true});
});
 	stopTimer();
 	stopDice();
  	document.getElementById("btn1").disabled=true;
 	document.getElementById("btn2").disabled=true;
	}

}
function stopTimer() {
    clearInterval(timer);
}



function rolldice1()
{
randomdice1=Math.floor(Math.random()*5);
var dice1 = document.getElementById("die1");
dice1.src="images/"+randomdice1+".jpg";

}

function rolldice2()
{
randomdice2=Math.floor(Math.random()*5);
var dice2 = document.getElementById("die2");
dice2.src="images/"+randomdice2+".jpg";
}

function diceInterval()
{
	timer = setInterval(abc, 1000);

//b=b+1;
	
	if (b==11)
	{
$(document).ready(function(){
	$('.modal').modal({show:true});
});	
	
 	stopTimer();
 	stopDice();
  	document.getElementById("btn1").disabled=true;
 	document.getElementById("btn2").disabled=true;
	}




if(r==1){
	document.getElementById("btn1").disabled=true;
	document.getElementById("btn2").disabled=false;	
}
else{
	document.getElementById("btn1").disabled=false;
	document.getElementById("btn2").disabled=true;
	
}


myVar1=setInterval(rolldice1,100);
myVar2=setInterval(rolldice2,200);
}

function stopDice()
{
	document.getElementById("btn1").disabled=false;
	document.getElementById("btn2").disabled=true;
	stopTimer();
	clearInterval(myVar1);
	clearInterval(myVar2);
	if(randomdice1 == randomdice2)
{
	$(document).ready(function(){
	$('#myModal2').modal({show:true});
});
	stopTimer();
	document.getElementById("btn1").disabled=true;
 	document.getElementById("btn2").disabled=true;
}
else if(randomdice1 != randomdice2)
{
alert("Try Again!");
bool=1;
    	
}
}

function reset(){
window.location.reload(true);
}
	

function timerBlink()
{
	if (d==1)
	{
		document.getElementById("div1").style.color="red";
		d=2;
	}
	else
	{
		document.getElementById("div1").style.color="green";
		d=1;
	}
	setTimeout("timerBlink()",100);
}


