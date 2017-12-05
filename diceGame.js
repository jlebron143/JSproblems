"use strict"
//The objective of the "Dice 100" game is to come as close to a score of 100 as possible, without passing 100.
//In this game , 6 dice are 'rolled' by the player and 6 dice are 'rolled' by the Player 2 (simulated by the Btn click).
// Add up both rolls.

// player needs to navigate to game
//player needs to know what the objective of the game 
//player needs to click button to roll dice
//player 2 profile needs to be created
//Each players score needs to be kept a track of 
//Each players needs to be alerted of when their turn is up

function play ()
{
	//create dice array 
	let player1 = [];
	let player2 = [];
}

// prompt was created to display a dialog box that prompts to the players for input 

let player1 = alert("Welcome to Dice 100, player 1?");
let player2 = alert("Welcome to Dice 100, player 2?");
let points1 = 0;
let points2 = 0;
let rollDiceButton = document.getElementById("rollDiceButton");
let win =100;
// score >=100

function setScoreToZero() {
	let points = 0;
	return points;
}

function doubleScore(currentScore) {
	let points = currentScore * 2;
	return points;
}

 function rollDice(){

let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let status = document.getElementById("status");
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");

//math.floor returns the largest interger < than or = to a given number
//math.random generates a random decimal



let d1 = Math.floor(Math.random() * 6) + 1;
let d2 = Math.floor(Math.random() * 6) + 1;

let moves = 1;


//create scoreTotal
//use innerHTML to write into HTML element
//The innerHTML property sets or returns the HTML content of an element
// status is to represent the end result of function

let scoreTotal = d1 + d2;
dice1.innerHTML = d1
dice2.innerHTML = d2
status.innerHTML =  ("You rolled " + scoreTotal );

//if (conditional)statement needs to be entered so the block of code to be executed if the condition is true
//we need to make a condition for each move that the players need to make 
// == means equal to and && means logical and

	if(moves == 1) {
		if (d1 == 1 && d2 ==1) {
	// if both of the dices equal 1, the score is to be set to equal 0
		player1Score.innerHTML += points1;
		status.innerHTML += " player1 score has been reset back to zero";
		points1 = setScoreToZero();

	//else statement needs to be entered to specify the block of code to be executed if the condition is false
	// ++ means increment
		} else if (d1 == d2) {
	//if a player rolls doubles, the players score is doubled
	//this statement will make scoreTotal double
			points1 = doubleScore(points1);
			player1score.innerHTML += "Great Job, you have doubled your score!" + "scoreTotal"
		} else {
			points1 = points1 + scoreTotal;
			player1Score.innerHTML += points1
			status.innerHTML += " Come on up to the plate, player2";
			console.log(points1);
		}
		moves = 2;
	}
	else {
		if (d1 == 1 && d2 ==1){
			player2Score.innerHTML += points2;
			status.innerHTML += player2+"Player2 score has been reset back to zero";
			points2 = setScoreToZero();
		}
		else if (d1 == d2){
			points2 = doubleScore(points2);
			player2Score.innerHTML += "Awesome Sauce! You just doubled your points ";	
		} else {
			points2 + points2 + scoreTotal;
			player2Score.innerHTML += points2;
			status.innerHTML += "You're up next!" + "player1";
		}
		moves = 1;
	}

	if (points1 >= win || points2 >= win) {
		winner();
	}
//else if is used to specify a new condition to test,if the first condition is false
}

function winner(){

//let highestScore = document.getElementById("highestScore");

let player1Total = document.getElementById(points1);                                                                  
	
let player2Total = document.getElementByID(points2);                                                                
	
	if (points1 > points2){
		document.getElementById("player1Total").className = "total win";
		document.getElementById("player2Total").className = "total lose";
		alert("Player 1 Wins");
		console.log(" player 1 wins")
	}
	else if (points2 > points1) {
		document.getElementById("player1Total").className = "total lose";
		document.getElementById("player2Total").className = "total win";
		alert("player 2 wins");
		console.log("player 2 wins");
	}
	else if (points1 === points2) {
		document.getElementById("player1Total").className = "Total win";
		document.getElementById("player2Total").className = "total win";
		alert(" Game Tied!");
		console.log("Game Tied")
		// tie!
	}
}		
// score >=100
//className property is used to sets or returns(used as sets in this script)the class name of an element














