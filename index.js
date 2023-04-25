const fs = require('fs');
const http = require('http');

const server = new http.createServer((req, res) => {
    
    const ourReadStream =
        fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
    ourReadStream.pipe(res);    
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// Path: bigData.txt