var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var statuses = ['Todo','In Process','Completed'];

var GadgetSchema = new Schema({
    Yoo: { type: String },
    Hoo: { type: Number }
});

module.exports = 
 Mongoose.model('Gadgets', GadgetSchema);