// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
    
      const alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
      function decryptChar(char, shift) {
          let newLetter = ""
          let findLetter = alphabet.find(letter => char === letter)
          if (!findLetter) {
              return char
          }
          let letterCode = char.charCodeAt(0)
          let newLetterCode = letterCode - shift
          if (newLetterCode < 97) {
              newLetterCode += 26
              newLetter = String.fromCharCode(newLetterCode)
          } else if (newLetterCode > 122) {
              newLetterCode = newLetterCode - 26
              newLetter = String.fromCharCode(newLetterCode)
          } else {
              newLetter = String.fromCharCode(newLetterCode)
          }
          return newLetter
      }
    
      function encryptChar(char, shift) {
          let newLetter = ""
          let findLetter = alphabet.find(letter => char === letter)
          if (!findLetter) {
              return char
          }
          let letterCode = char.charCodeAt(0)
          let newLetterCode = letterCode + shift
          if (newLetterCode < 97) {
              newLetterCode += 26
              newLetter = String.fromCharCode(newLetterCode)
          } else if (newLetterCode > 122) {
              newLetterCode = newLetterCode - 26
              newLetter = String.fromCharCode(newLetterCode)
          } else {
              newLetter = String.fromCharCode(newLetterCode)
          }
          return newLetter
      }
    
      function caesar(input, shift, encode = true) {
           input = input.toLowerCase()
          if (!shift || shift === 0 || shift < -25 || shift > 25) {
              return false
          }
          let result = ""
          if (encode) {
              for (let i of input) {
                  newLetter = encryptChar(i, shift)
                  result += newLetter
              }
          } else {
              for (let i of input) {
                  newLetter = decryptChar(i, shift)
                  result += newLetter
              }
          }
          return result
      }
    
      return {
        caesar,
      };
    })();
    
  module.exports = { caesar: caesarModule.caesar };