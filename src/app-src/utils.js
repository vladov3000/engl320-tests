import * as textData from './texts.json';

export function getMaxQuestions() {
	return Object.keys(textData.default).length;
}

export function randomProperty(obj) {
	// returns random property of obj

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