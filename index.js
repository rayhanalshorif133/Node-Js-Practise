const fs = require('fs');
const http = require('http');
const inputData = require('./inputData');


const ourReadStream = 
fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');

// ourReadStream.on('data', (data) => {
//     console.log(data);
// });

const server = new http.createServer((req, res) => {
    if(req.url === '/') {
        let html = `
        <html>
            <head>
                <title>NodeJS</title>
            </head>
            <body>
                <h1>NodeJS</h1>
                <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
            
                <form method="POST" action="/process">
                    <textarea id="w3review" name="w3review" rows="4" cols="50">
                    ${inputData}
                    </textarea>
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                </body>
        </html>
        `;
        res.write(html);
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        let html = "";
        // req.on('data', (data) => {
        //     let textData = data.toString();
        //     let len = textData.length;

        //     html += `<p>Data length: : ${len}</p>`;

        // html += `
        // <html>
        //     <head>
        //         <title>NodeJS</title>
        //     </head>
        //     <body>

        //         <p>${textData}</p>
        //         </body>
        // </html>
        // `;
        let body = [];
        req.on('data', (data) => {
            body.push(data);
        });
        req.on('end', () =>{
            console.log("end");
            var main_body = Buffer.concat(body).toString();
            console.log(main_body);
        });
        res.write("Thank you for submitting the form");
        res.end();
    } else {
        res.write('404');
        res.end();
    }

});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// Path: bigData.txt