import {ChatServer} from './chatserver';

let app = new ChatServer().App;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

export {app};