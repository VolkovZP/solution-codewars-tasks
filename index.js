'use strict';
/*
# Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

//returns[false,1,1,2,1,3,"a",0,0]

let moveZeros = function (arr) {
    let firstSubArr = arr.filter(item => item !== 0);
    let secondSubArr = arr.filter(item => item === 0);
    return [...firstSubArr, ...secondSubArr]
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
