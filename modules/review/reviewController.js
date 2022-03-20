const Review = require('./reviewModel');


const add = async (req, res, next) => {
    try {
        let review = new Review(req.body);
        await review.save();
        res.send(review);
    } catch (error) {
        error.status = 500;
        next(error);
    }
}

const remove = async (req, res, next) => {

    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) {
            throw new Error('no review found');
        }
        res.send("review deleted successfully")
    }
    catch (error) {
        error.status = 404
        next(error)
    }
}

const update = async (req, res, next) => {

    try {
        const review = await Review.findByIdAndUpdate(req.params.id,{...req.body},{new:true});
        if (!review) {
            throw new Error('no review found');
        }
        res.send(review)
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