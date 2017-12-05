"use strict"
//string compression
//aaabbccdd	
//a3b2c2d2
//write simple function for string compression
//create var compString (empty)
//run a loop through the string
//need to keep checking
//create while loop;unless condition is true
//the value i++ is the value of i before the increment
//final compression string (currentLetter + curCount)


function stringCompression (str) {

	var compString="";
		var currentLetter = str[i];
		var currentCount = 1;
		for(var i=0;i<str.length;i++){
	while(str[i+1] === currentLetter){
		currentCount ++;
		i++;
		} 
		compString+= currentLetter + currentCount;
	}
	if(compString.length > str.length){
		return str;
	}
	
	return compString;
}
stringCompression("aaaaaaaaaddddddddggggggggg");

