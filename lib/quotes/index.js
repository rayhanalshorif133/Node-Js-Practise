/* 
* Title: Quotes Library
* Description: Utility library for getting a list of random quotes
* Author: Rayhan Al Shorif
* Date: 25/04/2023
*/


// Dependencies
const fs = require('fs');

// Math Library Object - Module scaffolding
const quotesLibrary = {};

quotesLibrary.allQuotes = allQuotes = () =>{
    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(__dirname+'/quotes.txt', 'utf8');
    // Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfQuotes;
} 

// Export the module
module.exports = quotesLibrary;


