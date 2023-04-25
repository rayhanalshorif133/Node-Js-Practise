const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by Node.js!');

fs.appendFileSync('notes.txt', '\nHello World!');


const data = fs.readFileSync('notes.txt');


console.log(data.toString());
