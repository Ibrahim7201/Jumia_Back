const Variant = require('./variantModel');


// sign up function expression
const add = async (req, res, next) => {
    try {
        let variant = new Variant(req.body);
        await variant.save();
        res.send(variant);
    } catch (error) {
        error.status = 500;
        next(error);
    }
}

//log in function expression
const remove = async (req, res, next) => {

    try {
        const variant = await Variant.findByIdAndDelete(req.params.id);
        if (!variant) {
            throw new Error('no variant found');
        }
        res.send("variant deleted successfully")
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