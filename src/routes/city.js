const express = require("express");
const router = express.Router();
/* Constroller imports */
const cityController = require("../controllers/city");

/* GET METHODS */
router.get("/get", cityController.getCities);

/* POST METHODS */
router.post("/add", cityController.addCity);

module.exports = router;
