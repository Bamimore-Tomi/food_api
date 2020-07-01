var mongoose = require('mongoose')
var orderSchema = mongoose.Schema({
	order:{
		type: String,
		required: true
	},
	measure:{
		type: String,
		required: true
	},
	quantity:{
		type: Number,
		required: true
	},
	phone_number:{
		type: Number,
		required: true,
	},
	address:{
		type: String,
	},
	time:{
		type: Date,
		required: true,
	}
});
var Order=module.exports=  mongoose.model('order', orderSchema);
module.exports.get = function (callback, limit) {
    Order.find(callback).limit(limit);
};