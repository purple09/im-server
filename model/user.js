/**
 * Created by guizhen on 2015/11/4.
 */
var mongo = require('./db');
mongo.connect();
var userSchema=new mongo.Schema({
    name:String
    ,password:String
},{versionKey:false});
var User=mongo.mongoose.model('User',userSchema);
module.exports =User;
User.add=function(name,password,callback){
    var newUser=new User();
    newUser.name=name;
    newUser.password=password;
    newUser.save(function(err){
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(null);
        }
    })
};
User.findByName=function(name,callback){
    User.findOne({name:name},function(err,doc){
        console.log('===err'+err);
        console.log('===doc'+doc);
        if(err){
            console.log(err);
            callback(err,null);
        }else{
            callback(null,doc);
        }
    });
};
User.verify=function(name,password){
    console.log('verify');
    this.findByName(name,function(err,doc){
        console.log('err'+err);
        console.log('doc'+doc);
        if(err){
            return false;
        }else if(doc){
            return doc.password==password?true:false;
        }else{
            return false;
        }
    });
};

