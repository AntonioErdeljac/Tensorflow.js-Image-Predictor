const express = require('express');
const http = require('http');

const app = express();

app.use(express.static('./static'));

app.get('/', (req, res) => res.render('/static/index.html'))

http.createServer(app).listen(3000);
