// app.js
const SERVER_PORT = 9528;
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
app.use('/chat', express.static(path.join(__dirname, '../', 'public')));

server.listen(SERVER_PORT, () => console.log(`Server is listening on ${SERVER_PORT}`));
