const connection = require("./connection");

const GetAllClients = async () => {
  const AllClients = await connection.execute(`select * from cliente`);
  return AllClients;
};

module.exports = {
  GetAllClients,
};
