// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// returns fales if the given alphabet isnt exactly 26 characters
// correctly transtlates given phrase. based on the alphabet give to the function.
// returns false if any duplicate characters in the given alphabet
// ignores capital letters

const substitutionModule = (function () {
  const myAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;   
    } else {
      const alphaArray = alphabet.split('');
      if (alphaArray.some((value, index, array) => array.lastIndexOf(value) != index)) {
        return false;
      }
    }  

    let mySecretMessage = "";
    const lowercase = input.toLowerCase();
    if (encode) {
      for (let i = 0; i < lowercase.length; i++) {
        let currentLetter = lowercase[i];
        let currentIndex = myAlphabet.indexOf(currentLetter);
        let newLetter = alphabet[currentIndex];
        if (typeof newLetter === "undefined") {
          newLetter = currentLetter;
        }
        mySecretMessage += newLetter
      }
      return mySecretMessage;
    } else {
      for (let i = 0; i < lowercase.length; i++) {
        let currentLetter = lowercase[i];
        let currentIndex = alphabet.indexOf(currentLetter);
        let newLetter = myAlphabet[currentIndex];
        if (typeof newLetter === "undefined") {
          newLetter = currentLetter;
        }
        mySecretMessage += newLetter
      }
      return mySecretMessage
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
