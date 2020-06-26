var mongoose = require('mongoose');// Setup schema
var foodSchema = mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageurl: String,
    foodDescription: String,

});

var Food = module.exports = mongoose.model('food', foodSchema);
module.exports.get = function (callback, limit) {
    Food.find(callback).limit(limit);
};