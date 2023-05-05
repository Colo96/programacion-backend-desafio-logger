const { Schema, model } = require("mongoose");

const collection = 'products';

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    thumbnail_url: {
        type: String
    }
});

const ProductsModel = model(collection, schema);
module.exports = ProductsModel;