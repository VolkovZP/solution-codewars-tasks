'use strict';
/*
# Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
    const obj = {
        valid: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', 'a', 'e', 'i', 'o', 'u', 'y'].sort(),
        notValid: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ', '.', ','],
    }
    let result = []
    string = Array.from(new Set(string.toLowerCase().split('').sort()));
    for (let item of string) {
        if (!obj['notValid'].includes(item)) result.push(item);
    }
    if (result.join('') === obj['valid'].join('')) return true;
    return false
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"))

