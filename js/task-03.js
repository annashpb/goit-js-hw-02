'use strict';

function findLongestWord(string) {
    let stringArr = string.split(' ');
    let longestWord = stringArr[0];
    for (let i = 1; i < stringArr.length; i += 1) {
        if (stringArr[i].length > longestWord.length) {
            longestWord = stringArr[i];
        }
    }
    return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));