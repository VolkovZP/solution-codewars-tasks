'use strict';
/* # Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str) {
    const punctuationMarks = '.,!?;:^&*()_+-'
    let result = ''

    str.split(' ').map(item => {
        if (!punctuationMarks.includes(item)) {
            result += item.slice(1) + item[0] + 'ay' + ' '
        } else {
            result += item + ' '
        }
    })
    return result.trim()
}
console.log(pigIt('Hello world !'))