// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alphabet = "!@#$%^&*()asdfghjklqwertyu"

  function substitution (input, alphabet = false, encode = true) {
    if (alphabet.length !== 26) return false
    const regularAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
    const encodedAlphabet = alphabet.split("")
    
    for (let i = 0; i < alphabet.length; i++) {
      let char = alphabet[i]
      let filtered = encodedAlphabet.filter(c =>  char === c)
      if (filtered.length > 1) {
        return false
      }
    }
    
    const alphabetA = encode ? encodedAlphabet : regularAlphabet;
    const alphabetB = encode ? regularAlphabet : encodedAlphabet;

    let a = input.split("")

    let b = a.map((character) => {
      return alphabetA[alphabetB.indexOf(character)] || character;
    });

    let c = b.join("");

    return c;
  
  };

  console.log(substitution("))!hello world?((", "1234567890asdfghjklqwertyu" , false))
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

