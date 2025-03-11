const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: Object, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
