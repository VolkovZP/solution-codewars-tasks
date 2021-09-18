'use strict';
/* # Uncollapse Digits

Task
You will be given a string of English digits "stuck" together, like this:

"zeronineoneoneeighttwoseventhreesixfourtwofive"

Your task is to split the string into separate digits:

"zero nine one one eight two seven three six four two five"

*/

const numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

function uncollapse(digits, str = '', getDigits = []) {
    for (let i = 0; i < digits.length; i++) {
        str += digits[i];
        if (numberArray.includes(str)) {
            getDigits.push(str);
            str = '';
        }
    }
    return getDigits.join(' ')
}

console.log(uncollapse('foursixeighttwofive'))