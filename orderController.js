
Order = require('./orderModel');
//get all orders
exports.index = function (req, res) {
	Order.get(function (err, orders) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "orders recieved",
            data: orders
        });
    });
};
//add new order
exports.new = function (req, res) {
    var order = new Order();
    
    order.order = req.body.order;
    order.measure = req.body.measure;
    order.quantity = req.body.quantity;// save the order and check for errors
	order.phone_number= req.body.phone_number;
	order.time=req.body.time;
    order.save(function (err) {
		if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }else{
		 res.json({
            status: "success",
			result: "ok",
            message: "orders retrieved successfully",
            data: order
        })
		}
    });
}
exports.delete = function (req, res) {
	Order.deleteMany({
        phone_number: req.params.phone_number
    }, function (err, orders) {
        if (err){
		res.send(err)
		}else{
		res.json({
            status: "success",
            message: 'food deleted'
        })
		}
    });
};
