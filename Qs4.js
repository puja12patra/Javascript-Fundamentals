// Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
// from a given string.


function extractDateInfo(pattern, inputString) 
{
    let regex = new RegExp(pattern);
    let match = inputString.match(regex);

    if (match) 
    {
        // Extract specific parts using numbered capture groups
        const day = match[1];
        const month = match[2];
        const year = match[3];
    
        return { day, month, year };
    } 
    else 
    {
        return null; // No match found
    }
}

let inputString = "20-01-2024";
let datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
let result = extractDateInfo(datePattern, inputString);

if (result) 
{
  console.log("Day:", result.day);
  console.log("Month:", result.month); 
  console.log("Year:", result.year);
} 
else 
{
  console.log("No match found.");
}
//OUTPUT:
// Day: 20
// Month: 01
// Year: 2024