const { Schema, model } = require("mongoose");

const collection = 'businesses';

const schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'products'
        }
    ]
});

const BusinessesModel = model(collection, schema);
module.exports = BusinessesModel;