const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();

// get all users
const getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(401).json({ error });
  }
};

// get one user
const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "No such user exists" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


router.get("/all", getAllUsers);
router.get("/:id", getUser);


module.exports = router;
