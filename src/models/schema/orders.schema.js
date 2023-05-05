const { Schema, model } = require("mongoose");

const collection = 'orders';

const schema = new Schema({
    order_number: {
        type: String,
        required: true
    },
    business: {
        type: Schema.Types.ObjectId,
        ref: 'businesses'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    status: {
        type: String,
        enum: ["PENDING", "COMPLETED", "REJECTED"],
        default: "PENDING"
    },
    products: [
        {
            reference: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    total_price: {
        type: Number,
        default: 0
    }
});

const OrdersModel = model(collection, schema);
module.exports = OrdersModel;