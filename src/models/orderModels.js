const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true
    }, status: {
        type: String, enum: ["pending", "cancelled", "delivered"],
    }
}, { timestamps: true });
const Order = mongoose.model("order", orderSchema);
module.exports = Order;