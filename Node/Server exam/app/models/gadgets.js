var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var GadgetsSchema = new Schema({
    Yoo: { type: String, required: true },
    Hoo: { type: Number, default: 10 },
});

module.exports = Mongoose.model('gadgets', GadgetsSchema);