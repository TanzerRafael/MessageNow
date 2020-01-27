import {ChatServer} from './chatserver';

let app = new ChatServer().App;

app.get('/', function (req, res) {
    res.sendFile('../build/index.html');
  });

export {app};