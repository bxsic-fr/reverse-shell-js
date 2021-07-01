#!/usr/bin/env node
var WebSocketServer = require('websocket').server;
var http = require('http');
const readline = require('readline-sync');
let port = 8080;

var server = http.createServer(function(request, response) {
    console.log('Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(port, function() {
    console.log('Server is listening on port ' + port);
});

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

wsServer.on('request', function(request) {
    
    var connection = request.accept('echo-protocol', request.origin);
    console.log('New connection [' + connection.remoteAdress + ']');

    //thx to bobbie to be helpuf <3
    function prompt() {
        const message = readline.question("> ")
        connection.sendUTF(message)
    }

    connection.addListener("message", function(message){
        console.log(message.utf8Data)
        prompt()
    })

    prompt() // init

    connection.on('close', function(reasonCode, description) {
        console.log(connection.remoteAddress + ' disconnected. [Reason : ' + description + ']');
    });
});
