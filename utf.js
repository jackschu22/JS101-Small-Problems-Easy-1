// Write a function that determines and returns the UTF-16 string value of a string passed in as 
// an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. 
// (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

function utf16Value(string) {
  let sumValue = 0;

  for (let i = 0; i < string.length; i += 1) {
    sumValue += string.charCodeAt(i);
  }
  console.log(sumValue);
  return sumValue;
}

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811