// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

var temp1 = 85
var temp2 = 350
var temp3 = 212

// Create a function that takes in one argument of temperature
const isBoiling = (temp) => {
    // Use if/else conditionals to check what the temperature is
    // First case if temperature is at boiling point (212 F)
    if (temp === 212) {
        return "212 is at boiling point";
    // Second case is if the temperature is below boiling
    } else if (temp < 212) {
        return `${temp} is below boiling point`;
    // Third case is if the temperature is above boiling
    } else if (temp > 212) {
        return `${temp} is above boiling point`;
    // Fourth case (else) if something goes wrong
    } else {
        return "something went wrong"
    }
}


// Check the results using a console.log
console.log( isBoiling(temp1) );
console.log( isBoiling(temp2) );
console.log( isBoiling(temp3) );


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

var myForNumbers1 = [3, 7, 0, 6, -9]
var myForNumbers2 = [2, 5, -8, 20, 32]

// Create a function that takes in 1 argument which is an array
const timesFiveFor = (array) => {
    // Create a new array to store the new values
    let newArray = [];
    // Create a 'for' loop to iterate through the array
    for (let i = 0; i < array.length; i++) {
        // Add the value of that element times 5 to the end of the array using '.push()'
        newArray.push( array[i] * 5 );
    }
    
    // Return the new array
    return newArray;
}

// Check the results using a console log
console.log( timesFiveFor(myForNumbers1) );
console.log( timesFiveFor(myForNumbers2) );


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

var myMapNumbers1 = [87, 6, 28, 16, 2]
var myMapNumbers2 = [8, -7, 0, 6, 12]

// Create a function that takes in 1 argument which is an array
const timesFiveMap = (array) => {
    // Use the built-in method '.map()' to make a new array
    // with the original array's values multiplied by 5
    return array.map(value => {
        return value * 5;
    })
}


// Check the results using a console.log
console.log( timesFiveMap(myMapNumbers1) );
console.log( timesFiveMap(myMapNumbers2) );



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// Create a function that takes in 1 argument, which is a string
const noVowels = (str) => {
    // Convert the string into an array using '.split()' and store it in a variable called 'lettersArr'
    let lettersArr = str.split('')
    // Use '.filter()' to check if the element is a vowel
    let consonantsArr = lettersArr.filter(value => {
        // '.filter' requires a true or false to filter the array
        // so we need if/else conditionals
        // Check if an array containing the vowels includes the value
        // Force value to lowercase to capture those that are capitalized as well
        if ( !['a','e','i','o','u'].includes(value.toLowerCase()) ) {
            // If it is not in the array of vowels, it is a consonant,
            // and we want to add it to the new array
            return true;
        } else {
            // Otherwise, it is not a consonant, and should not be added
            return false;
        }
    })
    
    // Use '.join()' to convert the array back to a string, which we will return back
    return consonantsArr.join('');
}

// Check the results using a console.log
console.log( noVowels(stringWithVowels1) );
console.log( noVowels(stringWithVowels2) );

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

// Create a function that takes in 1 argument, which is a string
const noVowelsRefactor = (input) => {
    // Check if the argument is a string
    if (typeof input !== 'string') {
        return `${input} is not a string`
    }

    // Convert the string into an array using '.split()' and store it in a variable called 'lettersArr'
    let lettersArr = input.split('')
    // Use '.filter()' to check if the element is a vowel
    let consonantsArr = lettersArr.filter(value => {
        // '.filter' requires a true or false to filter the array
        // so we need if/else conditionals
        // Check if an array containing the vowels includes the value
        // Force value to lowercase to capture those that are capitalized as well
        if ( !['a','e','i','o','u'].includes(value.toLowerCase()) ) {
            // If it is not in the array of vowels, it is a consonant,
            // and we want to add it to the new array
            return true;
        } else {
            // Otherwise, it is not a consonant, and should not be added
            return false;
        }
    })
    
    // Use '.join()' to convert the array back to a string, which we will return back
    return consonantsArr.join('');
}

// Check the results using a console.log
console.log( noVowelsRefactor(refactorTester1) );
console.log( noVowelsRefactor(refactorTester2) );
console.log( noVowelsRefactor(refactorTester3) );



// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"

var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

// Create a function that takes in 1 argument which is an array of strings
const mostChars = (array) => {
    // Create a variable that will store the string with the most characters
    let strMostChars;
    // Create a variable that will store the length of the longest string
    let longestLength = 0;
    // We will iterate through each element of the array, checking for the value's length
    for (let i = 0; i < array.length; i++) {
        // If the value's length is bigger than the current biggest length
        if ( array[i].length > longestLength ) {
            // then we overwrite the previous value
            longestLength = array[i].length;
            // And we store the current value to the variable holding the string with the most characters
            strMostChars = array[i];
        }
    }

    // Return the variable we created that contains the string with the most characters
    return strMostChars;
}

// Check the results using a console.log
console.log( mostChars(utensils) );
console.log( mostChars(vessels) );



// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]

// Create a function that takes in 1 argument which is an array
const lastLetterRemoved = (array) => {
    // We will use '.map()' to create a new array, and return that array back
    return array.map(value => {
        // Inside '.map()', we will grab a substring that contains everything except the last letter
        return value.substr(0, value.length - 1);
    })
}

// Check the results with console.log
console.log( lastLetterRemoved(mario) );
console.log( lastLetterRemoved(pacman) );