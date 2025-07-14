const controller = require("../controllers/CustomerController");
const express = require("express");
const router = express.Router();

//POST Requests
router.post("/saveCustomer", controller.saveCustomer);

//GET Requests
router.get("/getCustomer/:id", controller.getCustomer);

//PUT Requests
router.put("/updateCustomer/:id", controller.updateCustomer);

//DELETE Requests
router.delete("/deleteCustomer/:id", controller.deleteCustomer);

module.exports = router;