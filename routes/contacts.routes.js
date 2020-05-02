const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Contact = require("../models/Contact.models");
const User = require("../models/Users.models");
const auth = require("../middleware/auth.middleware");
//@route get API/contact
//@desc  get all user contact
//@ACCESS private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route post API/contact
//@desc  add new contact
//@ACCESS private
router.post("/", (req, res) => {
  res.send("add contact");
});

//@route put API/contact/:id
//@desc  update contact
//@ACCESS private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

//@route delete API/contact/:id
//@desc  delete contact
//@ACCESS private
router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
