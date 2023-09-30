//Exercise 1//

function doubleValues(array) {
    const newDoubledArr= array.map (function (num) {
        return (num* 2);
    }
    )
    return newDoubledArr
}
// In the funnction I created I used map to return a doubles value
/////////////////////////


//Exercise 2//

//main= [87,321,332,44,22,12,34,56]
//in this exercise I wanted to use map so it will return a new array, but didn't know how to exactly
function onlyEvenValues(array2){
    const evenarray = array2.map (function(even){
        return{
            value: even,
            isEven: even % 2===0
    
        }
    })
    return evenarray
    }
    /////////////////

//Exercise 3//

   function showFirstAndLast (arr){
    const result = []; //here to create a new array and to make sure it's an array!
   
      arr.forEach(function(element) {
        if (typeof element === 'string') {// we want only strings here
            result.push(element[0] + element[element.length - 1]);
        }
    });

    return result; // Return the resulting array
}
       /////////////////


//Exercise 4//

const vowels = ["a", "e", "i", "o", "u"];//first I need to define the vowels! otherwise how would it know?

//start with defining the function itself
function vowelCount(str){
    const count = {};// created an empty object to store the numbers of the vowels
    
    const chars = str.toLowerCase().split('');
    chars.forEach(letter => {
        // Check if the character is a vowel
        if (vowels.includes(letter)) {
            // If the vowel is already in the count object, increment its count
            if (count[letter]) {
                count[letter]++;
            } else {
                count[letter] = 1;
            }
        }
    });
    
  return count
}
// const string = prompt('meaor','hey','okay');
// const result = vowelCount(string);
// console.log(result);
// // str.forEach(letter in str.toLowerCase()); {
//     //     if (vowels.includes(letter)) {
//     //         count++;
//     //     }
//     // }
//   // return number of vowels-THE MISTAKE I made


       /////////////////


       //Exercise 5//

function capitalStr(str){
const string1={};
return str.split('').map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}).join(' ');
}
//this question is tricky, I'm not sure I solved it in the right way, my approach was to capitalize each chatracter in the string an dthen join all togther
// console.log(capitalStr(' jojo, hey')); 

       /////////////////

              //Exercise 6//
//okay cool-this is Ceaser Cipher encryption method and in the question they said shift by1//

const lowerCaseAlphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

function shiftLetters(str){
const inputLetterSmall= str.toLowerCase().split('');
const shiftedLetters = inputLetterSmall.map(letter => {
    if (!lowerCaseAlphabet.includes(letter)) {
        return letter; 
    }
    let index = lowerCaseAlphabet.indexOf(letter);
    index = index - 1 < 0 ? 25 : index - 1; 
    return lowerCaseAlphabet[index]; 
});
return shiftedLetters.join(''); }







