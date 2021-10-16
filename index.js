'use strict';
/* # Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

function findOdd(A) {
    const sortObj = {};
    A.forEach(element => {
        if (!sortObj[element]) {
            sortObj[element] = 0
        }
        sortObj[element]++
    });

    for (const [key, value] of Object.entries(sortObj)) {
        if (value % 2 === 1) return Number(key)
    }
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]))


// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
