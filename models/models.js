var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var directorSchema = new mongoose.Schema({
	name: String,
    sex: String,
   	nationality: String,
   	city: String,
    dob: {type: Date},
    age: String,
    blockbuster: String
})

mongoose.model('Director', directorSchema);