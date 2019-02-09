const express = require('express');
const http = require('http');

const app = express();

app.use('/static', express.static('./static'));

http.createServer(app).listen(3000);
