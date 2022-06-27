const express = require("express");
const router = express.Router();
/* Constroller imports */
const stateController = require("../controllers/state");

/* GET METHODS */
router.get("/get", stateController.getStates);
/* POST METHODS */
router.post("/add", stateController.addState);

module.exports = router;
