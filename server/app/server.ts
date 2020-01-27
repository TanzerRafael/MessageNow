import {ChatServer} from './chatserver';

let app = new ChatServer().App;

app.get('/', function (req, res) {
    res.sendFile('C:\\Users\\Rafael\\Desktop\\Schule\\SVS\\messagenow\\server\\build\\index.html');
  });

export {app};