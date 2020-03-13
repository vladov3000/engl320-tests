import * as textData from './texts.json';

export function getMaxQuestions() {
	// returns amount of titles in texts.json

	return Object.keys(textData.default).length;
}

export function randomProperty(obj) {
	// returns key to random property of obj

    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
}

export function getLetters(n) {
	// returns array of n length with ['A', 'B', 'C', ... ]

	return [...Array(n).keys()].map((i) => intToChar(i));
}

export function intToChar(n) {
	// returns n letter of the alphabet, where n=0 -> 'A'

	return String.fromCharCode('A'.charCodeAt(0) + n);
}

export function getOccurences(string, char) {
	// returns number of occurunces of char in string

	String.prototype.count=function(s1) { 
    	return (this.length - this.replace(new RegExp(s1,"g"), '').length) / s1.length;
	}

	return string.count(char);
}

export function getPosition(string, subString, n) {
	// returns nth occurunce of subString in String

   return string.split(subString, n).join(subString).length;
}