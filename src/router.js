const express = require("express");
const ClientControllers = require("./controllers/ClientControllers");
const OrderControllers = require("./controllers/OrderControllers");
const router = express.Router();

router.get("/client", ClientControllers.GetAllClients);

router.get("/client/:id", ClientControllers.GetClientById);

router.post("/client/create", ClientControllers.CreateClient);

router.put("/client/update/:id", ClientControllers.UpdateClient);

router.delete("/client/delete/:id", ClientControllers.DeleteClient);

router.get("/order", OrderControllers.GetAllOrders);

router.get("/order/:id", OrderControllers.GetOrderById);

router.post("/order/create", OrderControllers.CreateOrder);

router.put("/order/update/:id", OrderControllers.UpdateOrder);

router.delete("/order/delete/:id", OrderControllers.DeleteOrder);

module.exports = router;
