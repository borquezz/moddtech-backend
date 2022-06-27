const express = require("express");
const router = express.Router();
/* Constroller imports */
const clientController = require("../controllers/client");

/* GET METHODS */
router.get("/get", clientController.getClients);
/* POST METHODS */
router.post("/add", clientController.addClient);
/* PUT METHODS */
router.put("/delete", clientController.deleteClient);
router.put("/edit", clientController.updateClient);

module.exports = router;
