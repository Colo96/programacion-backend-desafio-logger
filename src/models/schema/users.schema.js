const { Schema, model } = require("mongoose");

const collection = 'users';

const schema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["USER", "BUSINESS", "ADMIN"],
        default: "USER"
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'orders'
        }
    ]
});

const UsersModel = model(collection, schema);
module.exports = UsersModel;