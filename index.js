// //for first dice
// var randomNumber1=Math.random()*6;
// randomNumber1=Math.floor(randomNumber1)+1;
// // alert(randomNumber1);
// switch(randomNumber1)
// {
//   case 1:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
//     break;
//   case 2:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
//     break;
//   case 3:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
//     break;
//   case 4:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
//     break;
//   case 5:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
//     break;
//   default:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
// }
// // alert(document.querySelectorAll("img"));

// //for second dice
// var randomNumber2=Math.random()*6;
// randomNumber2=Math.floor(randomNumber2)+1;
// // alert(randomNumber2);
// switch(randomNumber2)
// {
//   case 1:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
//     break;
//   case 2:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
//     break;
//   case 3:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
//     break;
//   case 4:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
//     break;
//   case 5:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
//     break;
//   default:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
// }

// //change the title to display a winner
// // alert(document.getElementsByClassName("container h1"));
// document.querySelector("h1").innerHTML
// if(randomNumber1===randomNumber2)
// {
//   // alert(document.getElementsByClassName);
//   document.querySelector("h1").innerHTML="Draw!";
// }
// else if(randomNumber1>randomNumber2)
// {
//   document.querySelector("h1").innerHTML="Player 1 win!";
// }
// else
// {
//   document.querySelector("h1").innerHTML="Player 2 win!";
// }


//second type do this work
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomimage1="dice"+randomNumber1+".png";
var randomimage2="dice"+randomNumber2+".png";
var randomimagesource1="images/"+randomimage1;
var randomimagesource2="images/"+randomimage2;

document.querySelectorAll("img")[0].setAttribute("src",randomimagesource1);
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomNumber1===randomNumber2)
{
  // alert(document.getElementsByClassName);
  document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 win!";
}
else
{
  document.querySelector("h1").innerHTML="Player 2 win!";
}
