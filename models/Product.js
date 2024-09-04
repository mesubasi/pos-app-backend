const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    img: { type: String, required: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", ProductSchema);
