const express = require("express");
const router = express.Router();

const contactController = require("./contact.controller");

router.get("/", (req, res, next) => {
  res.json({ msg: "Hello from Contact API!" });
});

// Create
router.post("/", (req, res, next) => {
  contactController.create(req.body);
  res.json({ msg: "Thank you for submitting the form!" });
});

// List
router.get("/list", async (req, res, next) => {
  console.log({ data: req.body });
  const list = await contactController.list();
  res.json({ data: list });
});

// getById

// update

// remove

module.exports = router;
