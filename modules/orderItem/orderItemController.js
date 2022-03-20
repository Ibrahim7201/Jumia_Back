const OrderItem = require('./orderItemModel');


const add = async (req, res, next) => {
    try {
        let orderItem = new OrderItem(req.body);
        await orderItem.save();
        res.send(orderItem);
    } catch (error) {
        error.status = 500;
        next(error);
    }
}

const remove = async (req, res, next) => {
    try {
        const orderItem = await OrderItem.findByIdAndDelete(req.params.id);
        if (!orderItem) {
            throw new Error('no orderItem found');
        }
        res.send("orderItem deleted successfully")
    }
    catch (error) {
        error.status = 404
        next(error)
    }
}



module.exports = {
    add,
    remove
}