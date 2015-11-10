/**
 * Created by guizhen on 2015/11/9.
 */
var user=require('./../user');
module.exports= function (server) {
    var io = require('socket.io')(server);
    io.on("connection",function(socket){
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
        var socketList=require('./sList/socketList');
        for(var i=0;i<socketList.length;i++){
            socket.on(socketList[i].name,require('./sList'+socketList[i].fn)(data));
        }
    });
}