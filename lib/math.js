/* 
* Title: Math Library
* Description: A Library for some math related tasks
* Author: Rayhan Al Shorif
* Date: 25/04/2023
*/ 


// Math Library Object - Module scaffolding
const mathLibrary = {};


mathLibrary.getRandomNumber = function(min, max){
    let minNumber = min;
    let maxNumber = max;
    minNumber = typeof(minNumber) == 'number'? minNumber : 0;
    maxNumber = typeof(maxNumber) == 'number'? maxNumber : 0;
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

// Export the module
module.exports = mathLibrary;