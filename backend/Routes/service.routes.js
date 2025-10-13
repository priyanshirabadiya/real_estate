const express = require("express");
const serviceRoutes = express.Router();

const {
  uploadService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
} = require("../controller/services.controller");

const { verifyToken } = require("../helpers/verifyToken");

// ====== Routes ======
serviceRoutes.post("/upload", verifyToken, uploadService);

serviceRoutes.get("/getall", verifyToken, getAllServices);

serviceRoutes.get("/getsingle/:id", verifyToken, getSingleService);

serviceRoutes.put("/update/:id", verifyToken, updateService);

serviceRoutes.delete("/delete/:id", verifyToken, deleteService);

module.exports = serviceRoutes;
