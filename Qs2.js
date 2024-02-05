// Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.


function isMatch(pattern, inputString) 
{
    let regex = new RegExp(pattern);
    return regex.test(inputString);
}
  
  // Test the function with various patterns and strings
  let pattern1 = /hello/gi;// 'g' flag for global search, 'i' flag for case-insensitive
  let pattern2 = /\d+/; // Matches one or more digits
  let pattern3 = /[A-Za-z]+/; // Matches one or more letters
  let pattern4 = /^start/; // Matches if the string starts with "start"
  let pattern5 = /end$/; // Matches if the string ends with "end"
  
  let string1 = 'Hello, world!';
  let string2 = '12345';
  let string3 = 'OnlyLetters';
  let string4 = 'start of the sentence';
  let string5 = 'This is the end';
  
  console.log(isMatch(pattern1, string1)); // true
  console.log(isMatch(pattern2, string2)); // true
  console.log(isMatch(pattern3, string3)); // true
  console.log(isMatch(pattern4, string4)); // true
  console.log(isMatch(pattern5, string5)); // true
  