'use strict';
/* # Encrypt this!


Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

*/

const encryptThis = text => {
    let result = ''
    text.split(' ').map(item => {
        item = [...item];
        [item[1], item[item.length - 1]] = [item[item.length - 1], item[1]]
        result += item.join('') + ' ';
    })
    return result.trimEnd().split(' ').map(item => item[0].charCodeAt() + item.slice(1)).join(' ');
}

console.log(encryptThis('hello world'))
