// Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// Create a function that searches for specific character classes in a given string and returns the matches. Test
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

function findCharacterClassMatches(inputString) 
{
  // Define regex patterns for different character classes
  var digitPattern = /\d/g;  // Matches digits
  var uppercasePattern = /[A-Z]/g;  // Matches uppercase letters
  var lowercasePattern = /[a-z]/g;  // Matches lowercase letters
  var specialCharPattern = /[^A-Za-z0-9]/g;  // Matches special characters (non-alphanumeric)

  // Helper function to find matches for a given pattern
  function findMatches(pattern, label) 
  {
      var matches = inputString.match(pattern);
      console.log(`Matches for ${label}: ${matches}`);
  }

  // Find and display matches for each character class
  findMatches(digitPattern, 'Digits');
  findMatches(uppercasePattern, 'Uppercase Letters');
  findMatches(lowercasePattern, 'Lowercase Letters');
  findMatches(specialCharPattern, 'Special Characters');
}

// Test the function with a sample string
var sampleString = 'Hello123! World';
findCharacterClassMatches(sampleString);
//OUTPUT:
// Matches for Digits: 1,2,3
// Matches for Uppercase Letters: H,W
// Matches for Lowercase Letters: e,l,l,o,o,r,l,d
// Matches for Special Characters: !, 