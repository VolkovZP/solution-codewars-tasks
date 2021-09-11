'use strict';
/*
# Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function likes which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
*/

/**
likes([]), 'no one likes this');
likes(['Peter']), 'Peter likes this');
likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
 */

/**
 * 
 * @param {arrey} names 
 * @returns {string}
 */

function likes(names) {
    if (names.length === 1) return `${names} likes this`;
    else if (names.length === 2) return `${names.join(' and ')} like this`;
    else if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
    else if (names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    else return 'no one likes this'
}

console.log((likes(['Max', 'John', 'Mark'])))
