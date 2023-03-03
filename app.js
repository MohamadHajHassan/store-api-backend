require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("<h1>Store API</h1><a href='/api/v1/products'>Products Route</a>");
});

app.use("/api/v1/products", productsRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

port = process.env.PORT || 3000;

const start = async () => {
    try {
        // Connect db
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server listening on port ${port} ...`));
    } catch (error) {
        console.log(error);
    }
};
start();
