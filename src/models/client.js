const connection = require("./connection");

const GetAllClients = async () => {
  const [AllClients] = await connection.execute(`select * from cliente`);
  return AllClients;
};

const GetClientById = async (id) => {
  const [ClientById] = await connection.execute(
    `select * from cliente where id = ?`,
    [id]
  );
  return ClientById;
};

const CreateClient = async (id, nome, endereco, telefone) => {
  const [client] = await connection.execute(
    `insert into cliente (id, nome, endereco, telefone) values (?,?,?,?)`,
    [id, nome, endereco, telefone]
  );
  return client;
};

const UpdateClient = async (id, nome, endereco, telefone) => {
  const [client] = await connection.execute(
    `update cliente set nome = ?, endereco = ?, telefone = ? where id = ?`,
    [nome, endereco, telefone, id]
  );
  return client;
};

module.exports = {
  GetAllClients,
  GetClientById,
  CreateClient,
  UpdateClient,
};
