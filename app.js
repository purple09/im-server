var express=require('express');
var http = require('http');
var app=express();
var server=http.Server(express);
var mySocket=require('./model/sList/mySocket');
mySocket(server);
//var io = require('socket.io')(server);

//var user=require('./model/user');
app.listen(3000);

app.get('/', function (req, res) {
    user.add('haer','123');
    //res.send('Admin Homepage');
    res.send(user.verify('aa'));
});

/*io.on("connection",function(socket){
    socket.emit('news', { hello: 'world' });
    socket.on('message', function (data) {
        console.log("message:"+data.msg);
    });
    socket.on('disconnect', function(data){
        console.log("disconnect:"+data);
    });
    socket.on('auth',function(data){
        console.log("auth:"+data);
        user.verify(data.name,data.password, function (result) {
            console.log("result:"+result);
            socket.emit('login',{ msg: result });
        });

    });

});*/

server.listen(80);