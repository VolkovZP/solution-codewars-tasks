'use strict';
/*
# Polybius square cipher - encode

Implement the Polybius square cipher.

Replace every letter with a two digit number. The first digit is the row number, and the second digit is the column number of following square. Letters 'I' and 'J' are both 24 in this cipher:

    1	2	3	4	5
1	A	B	C	D	E
2	F	G	H	I/J	K
3	L	M	N	O	P
4	Q	R	S	T	U
5	V	W	X	Y	Z

Input will be valid (only spaces and uppercase letters from A to Z), so no need to validate them.

*/

const obj2 = {
    A: 11,
    B: 12,
    C: 13,
    D: 14,
    E: 15,
    F: 21,
    G: 22,
    H: 23,
    I: 24,
    J: 24,
    K: 25,
    L: 31,
    M: 32,
    N: 33,
    O: 34,
    P: 35,
    Q: 41,
    R: 42,
    S: 43,
    T: 44,
    U: 45,
    V: 51,
    W: 52,
    X: 53,
    Y: 54,
    Z: 55,
    ' ': ' ',
}

function polybius(str) {
    let f = '';
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        let ind = str.indexOf(str[i], i);
        if (ind !== -1) {
            f += obj2[str[i]];
            i = ind
        }
    }
    return f
}
console.log(polybius('POLYBIUS SQUARE CIPHER'))
