const http = require('http');

const app= require('./app')

const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port,  function (req, res) {
    console.log("Le server est lancé sur http://localhost:4000")
});
