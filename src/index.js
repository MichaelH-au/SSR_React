import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './containers/Home'
const app = express();

console.log('success');


app.get('/', function(req, res){
    res.send(renderToString(<Home/>));
});

const server = app.listen(3000)