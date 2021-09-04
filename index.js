'use strict';
/*
# Highest Scoring Word

 Given a string of words, you need to find the highest scoring word.
 Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 You need to return the highest scoring word as a string.
 If two words score the same, return the word that appears earliest in the original string.
 All letters will be lowercase and all inputs will be valid.
*/
function high(x) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const objAlphabet = {};
    const arrNumber = []
    const arrInlineStr = [];
    let accamulator = 0;
    alphabet.split('').forEach((item, index) => {
        objAlphabet[item] = ++index
    })
    const arrayIsArray = x.split(' ');
    for (let i = 0; i < arrayIsArray.length; i++) {
        arrInlineStr.push([...arrayIsArray[i]])
    }
    for (let i = 0; i < arrInlineStr.length; i++) {
        for (let k = 0; k < arrInlineStr[i].length; k++) {
            accamulator += objAlphabet[arrInlineStr[i][k]]
        }
        arrNumber.push(accamulator)
        accamulator = 0;
    }
    let indexValue = 0
    let maxValue = arrNumber[0];
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > maxValue) {
            maxValue = arrNumber[i];
            indexValue = i
        }
    }
    return arrayIsArray[indexValue]
}

console.log(high('hello world'))