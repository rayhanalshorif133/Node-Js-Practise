const fs = require('fs');

// fs.writeFile('notes.txt', 'This file was created by Node.js!');

// fs.appendFile('notes.txt', '\nHello World!');
// fs.appendFile('notes.txt', '\nHello World!');
// fs.appendFile('notes.txt', '\nHello World!');
// fs.appendFile('notes.txt', '\nHello World!');
// fs.appendFile('notes.txt', '\nHello World!');


fs.readFile('notes.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

console.log('This is after the read call');