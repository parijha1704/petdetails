// load mongoose since we need it to define a model
var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
petSchema = new mongoose.Schema({
    name : String,
    colour : String,
	age : Number
});
module.exports = mongoose.model('pet', petSchema);