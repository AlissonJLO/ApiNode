const express = require("express");
const ClientControllers = require("./controllers/ClientControllers");
const router = express.Router();

router.get("/client", ClientControllers.GetAllClients);

router.get("/client/:id", ClientControllers.GetClientById);

router.post("/client/create", ClientControllers.CreateClient);

router.put("/client/update/:id", ClientControllers.UpdateClient);

router.delete("/client/delete/:id", ClientControllers.DeleteClient);

module.exports = router;
