// api-routes.js// Initialize express router
let router = require('express').Router();// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'welcome to alimentos, crafted with love',
    });
});// Import contact controller
var foodController = require('./foodController');// Contact routes
var orderController = require('./orderController')
router.route('/all_food').get(foodController.index);
router.route('/add_food').post(foodController.new);
router.route('/view_food/:food_id').get(foodController.view);
router.route('/update_food/:food_id').patch(foodController.update);
router.route('/overwirte_food/:food_id').put(foodController.update);
router.route('/delete_food/:food_id').delete(foodController.delete);// Export API routes
router.route('/all_orders').get(orderController.index);
router.route('/add_order').post(orderController.new);
router.route('/delete_order/:phone_number').delete(orderController.delete);
module.exports = router;