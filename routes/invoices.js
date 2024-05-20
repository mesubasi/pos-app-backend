const Invoice = require("../models/Invoices");
const express = require("express");
const router = express.Router();

//GET All Invoices
router.get("/get-all-invoices", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
    // res.send(Invoices);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST Add Invoices
router.post("/add-invoices", async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.status(200).json("Item added succesfully.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
