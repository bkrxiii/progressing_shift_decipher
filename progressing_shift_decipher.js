"use strict";

// To decipher Progressive Shift Cipher

// setup readline
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


// Start by asking user for string to decipher
readline.question("Enter the string to decipher: ", (str) => {

  // Ask user for which progressive shift value N to use (1, 2, 3, 4, 5, etc...)
  readline.question("Enter the progressive shift value N: ", (N) => {

    // Ask user for initial shift value
    readline.question("Enter the initial shift value: ", (shift) => {

      // Take each character in the string, and translate to ASCII value, then subtract the shift value
      let decipheredStr = "";


      // actual Loop
      for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        // convert char and shift to a number
        char = Number(char);
        shift = Number(shift);
        N = Number(N);
        let newChar = char - shift;
        // console.log(`char: ${char}, newChar: ${newChar}`)
        decipheredStr += String.fromCharCode(newChar);
        shift += N;
      }

      // Output the deciphered string
      console.log(decipheredStr);
      // Close the readline
      readline.close();
    });
  });
});

