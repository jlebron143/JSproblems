"use strict"
//write a javascript function that checks whether a passed string is palindrome or not?
//A palindrome is a word,phase,number, or other sequence of characters which read the same backward as forward, such as madam or "race car".
//change the string into lower case and remove all non-alphanumerica characters
//check whether the string is empty or not
//check if the reverse string is going to be the same at its original state
//check if the length of the string is even or odd
//split into characters into an array then reverse that array then join it to recreate another string
//ignore spaces,non number and letters
//if the length of the string is 1 then it becomes a palindrome
//if the length of the string is odd ignore middle character
//Loop through to check the first character to the last character and then move next
//compare characters and drop them if they do not match
//

function palindrome(string){
	string = string.toLowerCase();
	string = string.replace(/[^a-z0-9]/,'');
	return string === string.split("").reverse().join("");
}
console.log(palindrome("madam"));