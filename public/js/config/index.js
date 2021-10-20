const BASE_URL = process.env.NODE_ENV === 'developement' ? 'http://127.0.0.1' : 'http://hjyspace.xyz';
const SERVER_PORT = 9528;
const SOCKET_PORT = 9527;
const SOCKET_URL = `${BASE_URL}:${SOCKET_PORT}`;


const config = {
    BASE_URL,
    SOCKET_URL,
    SOCKET_PORT,
    SERVER_PORT
}
export default config;

export {
    BASE_URL,
    SOCKET_URL,
    SOCKET_PORT,
    SERVER_PORT
}
