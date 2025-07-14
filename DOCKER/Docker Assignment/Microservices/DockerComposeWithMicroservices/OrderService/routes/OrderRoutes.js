const controller = require("../controllers/OrderController");
const express = require("express");
const router = express.Router();

//POST Requests
router.post("/saveOrder", controller.saveOrder);

//GET Requests
router.get("/getOrder/:id", controller.getOrder);

//PUT Requests
router.put("/updateOrder/:id", controller.updateOrder);

//DELETE Requests
router.delete("/deleteOrder/:id", controller.deleteOrder);

module.exports = router;