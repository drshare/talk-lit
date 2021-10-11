// socket
const ws = require('nodejs-websocket');
const SOCKET_SERVER_PORT = 9527;

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
socketServer.listen(SOCKET_SERVER_PORT, () => {
    console.log(`socket 服务启动监听端口${SOCKET_SERVER_PORT}`);
});

//广播
const broadcast = (msg) => {
    socketServer.connections.forEach(item => {
        //遍历出每个用户，挨个发消息
        item.send(msg);
    });
}
