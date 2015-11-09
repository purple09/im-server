var express=require('express');
var http = require('http');
var app=express();
var server=http.Server(express);

var io = require('socket.io')(server);

var user=require('./model/user');
app.listen(3000);

app.get('/', function (req, res) {
    user.add('haer','123');
    //res.send('Admin Homepage');
    console.log('enter');
    res.send(user.verify('aa'));
});

io.on("connection",function(socket){
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log("my other event:"+data);
    });
    socket.on('disconnect', function(data){
        console.log("disconnect:"+data);
    });
    socket.on('auth',function(data){
        console.log("auth:"+data);

    });

});

server.listen(80);