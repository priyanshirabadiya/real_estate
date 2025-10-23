const express = require("express");
const cardRoutes = express.Router();

const {
  uploadCard,
  getAllCards,
  getSingleCard,
  updateCard,
  deleteCard,
} = require("../controller/cards.controller");

const { verifyToken } = require("../helpers/verifyToken");

console.log("verifyToken:", verifyToken);

cardRoutes.post("/upload", verifyToken, uploadCard);

cardRoutes.get("/getall", verifyToken, getAllCards);

cardRoutes.get("/getsingle/:id", verifyToken, getSingleCard);

cardRoutes.put("/update/:id", verifyToken, updateCard);

cardRoutes.delete("/delete/:id", verifyToken, deleteCard);

module.exports = cardRoutes;
