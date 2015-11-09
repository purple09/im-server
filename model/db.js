/**
 * Created by guizhen on 2015/11/4.
 */
var mongoose = require('mongoose');
exports.connect = function(callback) {
    mongoose.connect('mongodb://localhost/im',callback);
};
exports.Schema=mongoose.Schema;
exports.mongoose=mongoose;