const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = (process.env.PORT || 8080);

server.set('port', port);
server.use(express.static('public'));
server.use(bodyParser.json());

server.get("/", (req,res,next)=>{

  res.status(200).send("Hello World").end();

});

server.listen(server.get('port'), function () {
     console.log('server running', server.get('port'));
});
