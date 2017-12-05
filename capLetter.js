"use strict"

//build function that capitalizes first letter of every word
// var b is going to be equal to an empty array 
// var sep (str.split)is going to take the string to separate it by its spaces
// we need a loop through
//use for loop 
//we are looping through and using our empty array and going to push str at the index of i and index of zero
//into the empty array
// target each word in a sentence it is grabing each letter at the beginning 
//use toUpperCase method
//attached to back to the words they came from 
//use .slice method
//attached everything back together use c.join
//thenconsole.log action 

function getBigPanda(str) {
 	var b=[];
	var spa= str.split(" ");
	for(var i=0;i<spa.length;i++){
		b.push(spa[i][0].toUpperCase()+spa[i].slice(1));
	}
	return b.join("");
}
 console.log(getBigPanda("hello panda, welcome to our website"))