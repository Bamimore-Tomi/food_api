// foodController.js// Import food model
Food = require('./foodModel');// Handle index actions
exports.index = function (req, res) {
	Food.get(function (err, foods) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "foods retrieved successfully",
            data: foods
        });
    });
};// Handle create food actions
exports.new = function (req, res) {
    var food = new Food();
    food.key = req.body.key ? req.body.key : food.key;
    food.name = req.body.name;
    food.imageurl = req.body.imageurl;
    food.foodDescription = req.body.foodDescription;// save the food and check for errors
    food.save(function (err) {
		if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }else{
		 res.json({
            status: "success",
			result: "ok",
            message: "foods retrieved successfully",
            data: food
        })
		}
    });
};// Handle view food info
exports.view = function (req, res) {
    Food.findById(req.params.food_id, function (err, foods) {
        if (err)
            res.send(err);
        res.json({
            message: 'food details loading..',
            data: foods
        });
    });
};// Handle update food info
exports.update = function (req, res) {Food.findById(req.params.food_id, function (err, food) {
        if (err){
            res.send(err)
		} else{
		food.name = req.body.name ? req.body.name : food.name;
        food.key = req.body.key ? req.body.key : food.key;
		food.name = req.body.name;
		food.imageurl = req.body.imageurl;
		food.foodDescription = req.body.foodDescription;// save the food and check for errors
        food.save(function (err) {
            if (err){
			res.json(err)
			}else{
            res.json({
                message: 'food Info updated',
				result: 'ok',
                data: food
            })
			}
        });
    }
}
	);
};// Handle delete food
exports.delete = function (req, res) {
	console.log(req.params.food_id)
	Food.deleteMany({
        name: req.params.food_id
    }, function (err, foods) {
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

