window.onload = function () {
    const content = document.getElementById('talk-list')
    const input = document.getElementById('input')
    const btn = document.getElementById('btn')

    // 创建WebSocket 连接
    const SOCKET_URL = `ws://hjyspace.xyz/socket`;
    const socket = new WebSocket(SOCKET_URL);
    socket.addEventListener('open', () => {
        addMessage('连接成功！');
    })


    socket.addEventListener('message', (msg) => {
        console.log(`来消息了：${msg}`);
        addMessage(msg.data);
    })

    socket.addEventListener('close', () => {
        addMessage('断开链接！');
    })
    btn.onclick = sendMessage;
    input.onkeydown = function (event) {
        enterSend(event);
    }

    function sendMessage() {
        const value = input.value;
        if (!value) {
            return;
        }
        console.log(`发送消息: ${value}`);
        socket.send(value);
        input.value = '';
    }

    function addMessage(text) {
        const liNode = document.createElement('li');
        const textNode = document.createTextNode(text);
        liNode.appendChild(textNode);
        content.appendChild(liNode);
    }


    function enterSend(event) {
        let code = event.keyCode;
        if (code === 13) {
            sendMessage();
        }
    }
}
