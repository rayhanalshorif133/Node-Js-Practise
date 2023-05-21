const express = require('express');

const app = express();
const db = require('./firebase');

app.use(express.static('public'));

app.use(express.json());

const peopleRef = db.collection('curd').doc('people');
const userRef = db.collection('curd').doc('users');

app.get('/', (request, response) => {
    response.send('Hello World!');
});


app.post('/add', async (request, response) => {
    const { name, address } = request.body;

    // find the document 
    const getPrevData = await peopleRef.get();

    const res = await peopleRef.set({name, address});

    await userRef.set({
        name: 'Rahul',
        address: 'Delhi',
        age: 20,
        phone: 1234567890,
        email: 'rahul@gmail.com'
    });

    response.send({
        res
    });
});


app.listen(3000, () => {
    console.log('The server is running on port 3000!');
});