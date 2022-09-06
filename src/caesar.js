// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


// 
// return false if shift value is 0, less than -25, greater than 25, or not present
// ingores capital letters - toLowerCase()
// handles shifts that go past the end of the alphabet - z shifted by 3 to the right would be c
// maintains spaces and other nonalphabetic symbols

const caesarModule = (function () {
  let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    if(!input || typeof input !== "string" || !shift || typeof shift !== "number") {
      return false;
    }
    if (shift === 0 || shift >= 25 || shift <= -25) {
      return false;
    }
    const lowercase = input.toLowerCase();
    let result = "";
    if (encode) {
      for (let i = 0; i < lowercase.length; i++) {
        let current = lowercase[i];
        let alphaIndex = alphabet.indexOf(current);
        if (!current.match(/[a-z]/i)) {
          result += current
        } else {
          if (alphaIndex + shift < 0) {
            alphaIndex = alphaIndex + 26;
          }
          let alphaShift = alphaIndex + shift;
          let newLetter = alphabet[alphaShift];
          result += newLetter
        }
      }
      return result
    } else {
      for (let i = 0; i < lowercase.length; i++) {
        let current = lowercase[i];
        let alphabetIndex = alphabet.indexOf(current);
        if (!current.match(/[a-z]/i)) {
          result += current;
        } else {
          let newShift = shift;
          if(shift < 0) {
            newShift = shift + (shift * -2);
          } else {
            newShift = shift - (shift * 2);
          }
          if (alphabetIndex - shift < 0) {
            alphabetIndex = alphabetIndex + 26
          }
          let alphaIndex = alphabetIndex + newShift;
          const newLetter = alphabet[alphaIndex];
          result += newLetter
        }
      }
    }
    return result
  }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
