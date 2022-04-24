const express = require("express");

const { register, login } = require("./controllers/auth.controller");
const petController = require("./controllers/pet.controller");
const userPetController = require("./controllers/user.pet.controller");

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/pets", userPetController);
app.use("/", petController);
module.exports = app;
