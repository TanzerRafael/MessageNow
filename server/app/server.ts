import {ChatServer} from './chatserver';

let app = new ChatServer().App;

app.get('/file', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


export {app};