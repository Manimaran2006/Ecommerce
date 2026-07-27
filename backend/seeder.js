const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/productModel");
const products = require("./data/products.json");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.DB_URL)
.then(async () => {
    console.log("MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products imported successfully");

    process.exit();
})
.catch((err) => {
    console.log(err);
});
