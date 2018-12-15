const express = require('express');
const app = express();

const Home = require('./containers/Home');
console.log('success');


app.get('/', function(req, res){
    res.send(
        `<html>
            <head>
                <title>hello</title>
            </head>
            <body>
                <h1>test</h1>
            </body>
        </html>`
    );
});

const server = app.listen(3000)