// app.js
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const PORT = 9528;
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, './', 'public')));

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
