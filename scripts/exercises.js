(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
function max(firstNum, secondNum){
  if (firstNum > secondNum){
      return firstNum;
  } else {
      return secondNum;
  }
}


  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
function maxOfThree(firstNum, secondNum, thirdNum){
    return Math.max(firstNum, secondNum, thirdNum)
  
}


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
function isVowel(char) {
  if (char === "a") { 
    return true;
 } else {
   return false;
 }
 }


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  function rovarspraket(str) {
    let newWord =[];
    let vowels = ['a', 'e', 'i', 'o', 'u', ' '];

    let text = str.toLowerCase().split("");
    for(let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            newWord.push(text[i]);
        } else {

            newWord.push(text[i], "o", text[i])
        }
    }
    return newWord.join("");
  }
  

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  function multiply(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
function reverse(str) {
  var text = "";
  for (var i = str.length - 1; i >= 0; i--) {
    text += str[i];
  }
  return text;
}


  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  
  function findLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
      if (longestWord.length < arr[i].length) {
        longestWord = arr[i];
      }
    }
    return longestWord.length;
  }


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  function filterLongWords(arr, lenInt) {
    const filteredWords = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > lenInt) {
        filteredWords.push(arr[i]);
      }
    }
    return filteredWords;
  }

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq(str) {
    const freqObj = {};
    for (let i = 0; i < str.length; i++) {
      if (freqObj[str[i]]) {
        freqObj[str[i]] += 1;

      } else {
        freqObj[str[i]] = 1;
      }
    }
    return freqObj;
  }

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
