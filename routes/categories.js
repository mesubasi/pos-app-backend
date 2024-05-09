const Category = require("../models/Category");
const express = require("express");
const router = express.Router();

//GET All Categories
router.get("/get-all-category", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
    // res.send(categories);
  } catch (err) {
    console.log(err);
  }
});

//POST Add Categories
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Item added succesfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});

//PUT Update Categories
router.put("/update-category", async (req, res) => {
  try {
    await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
    res.status(200).json("Item updated succesfully.");
  } catch (error) {
    console.log(error);
  }
});

//DELETE Delete Categories
router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id: req.body.categoryId });
    res.status(200).json("Item deleted succesfully.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
