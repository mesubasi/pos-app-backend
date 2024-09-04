const mongoose = require("mongoose");

const InvoicesSchema = mongoose.Schema(
  {
    customerName: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    paymentMethod: { type: String, require: true },
    cartItems: { type: Array, require: true },
    subTotal: { type: Number, require: true },
    tax: { type: Number, require: true },
    totalAmount: { type: Number, require: true },
  },
  {
    timestamps: true
  }
);

const Invoices = mongoose.model("invoices", InvoicesSchema);
module.exports = Invoices;