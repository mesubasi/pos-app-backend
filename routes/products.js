const Product = require("../models/Product");
const express = require("express");
const router = express.Router();

//GET All Products
router.get("/get-all-product", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
    // res.send(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST Add Products
router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("Item added succesfully.");
  } catch (err) {
    res.status(500).json(err);
  }
});

//PUT Update Products
router.put("/update-product", async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body);
    res.status(200).json("Item updated succesfully.");
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Delete Products
router.delete("/delete-product", async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.productId });
    res.status(200).json("Item deleted succesfully.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
