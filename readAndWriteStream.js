const fs = require('fs');
const http = require('http');
const inputData = require('./inputData');


const ourReadStream =
    fs.createReadStream(`${__dirname}/bigData.txt`);

const ourWriteStream =
    fs.createWriteStream(`${__dirname}/output.txt`);


ourReadStream.on('data', (chunk) => {
    ourWriteStream.write(chunk);
});