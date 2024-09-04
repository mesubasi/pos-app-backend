const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    title: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("categories", CategorySchema);
