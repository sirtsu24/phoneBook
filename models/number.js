const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const numberSchema = new Schema({
    name:{type: String},
    number: {type: Number}
  
});

mongoose.model("Number", numberSchema);