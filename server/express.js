// app.js
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
app.use(express.static(path.join(__dirname, './', 'public')));

const PORT = 9528;
server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
