const errorHandlerMiddleware = async (err, req, res, next) => {
    console.log(err);
    return res.status(500).send("Something went wrong. Please try again.");
};

module.exports = errorHandlerMiddleware;
