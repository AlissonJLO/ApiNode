const connection = require("./connection");

const GetAllOrders = async () => {
  const [AllOrders] = await connection.execute(`select * from pedido`);
  return AllOrders;
};

module.exports = {
  GetAllOrders,
};
