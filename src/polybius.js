// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// when encoding, i and j both equal 42
// when decoding, 42 equals both i and j
// ignores all lowercase letters
// maintains spaces before and after encoding or decoding


const polybiusModule = (function () {
  const alphabet = [
    "a", "b", "c", "d", "e", 
    "f", "g", "h", "(i/j)", "k", 
    "l", "m", "n", "o", "p", 
    "q", "r", "s", "t", "u", 
    "v", "w", "x", "y", "z"
  ];

  const polybiusSquare = [
    "11", "21", "31", "41", "51",
    "12", "22", "32", "42", "52",
    "13", "23", "33", "43", "53",
    "14", "24", "34", "44", "54",
    "15", "25", "35", "45", "55"
  ];

  const splitEveryTwoNums = numberString => {
    const separatedLetters = [];
    for (let index = 0; index < numberString.length; index +=2) {
      separatedLetters.push(numberString.slice(index, index +2));
    }
    return separatedLetters
  }

  function polybius(input, encode = true) {
    if (!input) {
      return false
    }
    if (encode) {
      let mySecretMessage = "";
      const lowercase = input.toLowerCase();
      for (let i = 0; i < lowercase.length; i++) {
        let currentLetter = lowercase[i];
        if (currentLetter === "i" || currentLetter === "j") {
          currentLetter = "(i/j)";
        }
        let alphaNumericIndex = alphabet.indexOf(currentLetter);
        let myPolybius = polybiusSquare[alphaNumericIndex];
        if (typeof myPolybius === "undefined") {
          myPolybius = " ";
        }
        mySecretMessage += myPolybius;
      }
      return mySecretMessage

    } else {
      let mySecretMessage = [];
      const encodedMessage = input.split(' ');
      for (let i = 0; i < encodedMessage.length; i++) {
        let currentWord = encodedMessage[i];
        if (currentWord.length % 2 === 1) {
          return false;
        } 
        let decodedWord = [];
        let separatedByLetter = splitEveryTwoNums(currentWord);
        separatedByLetter.forEach(letter => {
          let polybiusIndex = polybiusSquare.indexOf(letter);
          let translatedLetter = alphabet[polybiusIndex];
          return decodedWord.push(translatedLetter);
        })
        mySecretMessage.push(decodedWord.join(''))
      }
      return mySecretMessage.join(" ")
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
