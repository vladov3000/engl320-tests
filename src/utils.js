import * as textData from './texts.json';

export function getMaxQuestions() {
	return Object.keys(textData.default).length;
}

export function randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
}