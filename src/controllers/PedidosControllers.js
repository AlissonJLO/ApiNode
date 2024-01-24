const pedidos = require("../models/Pedidos")

async function GetAllClients(req,res) {
    const clients = await pedidos.GetAllClients();

    return res.status(200).json(clients[0]);
}

module.exports = {
    GetAllClients,
}