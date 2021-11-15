'use strict';
/* # Convert PascalCase string into snake_case

Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.


"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"


*/
function toUnderscore(string) {
    let arr = [];
    string = string.toString();
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase() && !+string[i]) arr.push('_');
        arr.push(string[i].toLowerCase());
    };
    let index = arr.indexOf('_');
    if (index > -1) {
        arr.splice(index, 1);
    };
    return arr.join('')
};
console.log(toUnderscore('TestController'))
console.log(toUnderscore("MoviesAndBooks"))
console.log(toUnderscore("App7Test"))
console.log(toUnderscore(1))
