const Order = require('./orderModel');


const add = async (req, res, next) => {
    try {
        let order = new Order(req.body);
        await order.save();
        res.send(order);
    } catch (error) {
        error.status = 500;
        next(error);
    }
}

const remove = async (req, res, next) => {

    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            throw new Error('no order found');
        }
        res.send("order deleted successfully")
    }
    catch (error) {
        error.status = 404
        next(error)
    }
}

const update = async (req, res, next) => {

    try {
        const order = await Order.findByIdAndUpdate(req.params.id,{...req.body},{new:true});
        if (!order) {
            throw new Error('no order found');
        }
        res.send(order)
    }
    catch (error) {
        error.status = 404
        next(error)
    }
}



module.exports = {
    add,
    remove,
    update
}