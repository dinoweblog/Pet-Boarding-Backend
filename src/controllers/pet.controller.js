const express = require("express");

const Pet = require("../models/pet.model");
const AllPets = require("../models/user.pet.model");

const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const pets = await Pet.find().lean().exec();

    return res.send(pets);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post(
  "/listing/create",
  authenticate,
  authorise(["admin"]),
  async (req, res) => {
    try {
      const pet = await Pet.create(req.body);

      return res.send({ pet });
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);

router.get(
  "/listing/:id",

  async (req, res) => {
    try {
      const id = req.params.id;
      const pet = await Pet.findById(id).lean().exec();

      return res.send({ pet });
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);

router.put(
  "/approval/:id",
  authenticate,
  authorise(["admin"]),
  async (req, res) => {
    try {
      const pet = await AllPets.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();

      return res.status(201).send(pet);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  }
);

module.exports = router;
