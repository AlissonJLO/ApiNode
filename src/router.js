const express = require("express");
const pedidosControllers = require("./controllers/PedidosControllers"); 
const router = express.Router();

router.get("/client", pedidosControllers.GetAllClients);

module.exports = router;
