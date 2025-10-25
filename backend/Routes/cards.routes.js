const express = require("express");
const cardRoutes = express.Router();

const {
  getAllCards,
} = require("../controller/cards.controller");

const { verifyToken } = require("../helpers/verifyToken");

cardRoutes.get("/getall", verifyToken, getAllCards);

module.exports = cardRoutes;
