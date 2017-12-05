"use strict"
let selectFlavor=["Chocolate","Strawberry", "Vanilla "];
	selectFlavor.reverse();
let selectSize;
selectFlavor= prompt("Select Your Flavor");
selectSize= prompt("Pick Bag Size ");

function getUserInput(message){
    let input = prompt(message);
    return input;

function checkWhatFlavorCustomerPicked(flavor,Size) {
	if(flavor > size){
		return true;
	}
	return false;
}

function displayTotalSelection(Selection){
	console.log("You have selected" + flavor + size);
}

function runSelection(){
	let flavorSelectionMessage = "Please enter your flavor";
	let sizeSelectionMessage = "Please enter bag size";
	let flavor = getUserInput(flavorSelectionMessage);
	let size = getUserInput(sizeSelectionMessage);
	let final;
	else{
		final=checkWhatFlavorCustomerPicked(flavor,size);
	}
displayTotalSelection(final);
}
