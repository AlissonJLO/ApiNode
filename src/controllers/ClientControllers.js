const clients = require("../models/client");

async function GetAllClients(req, res) {
  const clients = await clients.GetAllClients();

  return res.status(200).json(clients);
}

async function GetClientById(req, res) {
  const { id } = req.params;
  const client = await clients.GetClientById(id);

  return res.status(200).json(client);
}

async function CreateClient(req, res) {
  const { id, nome, endereco, telefone } = req.body;
  const client = await clients.CreateClient(id, nome, endereco, telefone);

  return res.status(200).json(client);
}

async function UpdateClient(req, res) {
  const { id, nome, endereco, telefone } = req.body;
  const client = await clients.UpdateClient(id, nome, endereco, telefone);

  return res.status(200).json(client);
}

async function DeleteClient(req, res) {
  const { id } = req.params;
  const client = await clients.DeleteClient(id);

  return res.status(200).json(client);
}

module.exports = {
  GetAllClients,
  GetClientById,
  CreateClient,
  UpdateClient,
  DeleteClient,
};
