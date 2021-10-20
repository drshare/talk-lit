// app.js
const SERVER_PORT = 9528;
const SOCKET_PORT = 9527;
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
app.use(express.static(path.join(__dirname, './', 'public')));

server.listen(SERVER_PORT, () => console.log(`Server is listening on ${SERVER_PORT}`));
// socket
const ws = require('nodejs-websocket');

const socketServer = ws.createServer(connect => {
    console.log(`用户连接成功！`);
    connect.on('text', data => {
        broadcast(data);
    })

    connect.on('close', () => {
        console.log('断开连接1');
    })

    //注册error事件,用户端口后就会触发该异常
    connect.on('error',()=>{
        console.log('用户连接异常');
    });
})
socketServer.listen(SOCKET_PORT, () => {
    console.log(`socket 服务启动监听端口${SOCKET_PORT}`);
});

//广播
const broadcast = (msg) => {
    socketServer.connections.forEach(item => {
        //遍历出每个用户，挨个发消息
        item.send(msg);
    });
}
