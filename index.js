'use strict';
/* # Sorted Obj


*/


const groupBy = (arr, callback) => {
    const result = {};
    arr.forEach(item => {
        if (result[callback(item)]) {
            result[callback(item)].push(item)
        } else {
            result[callback(item)] = [item]
        }
    })
    return result
}

console.log(groupBy([6.1, 4.2, 6.3, 4.4, 3.8], Math.floor))