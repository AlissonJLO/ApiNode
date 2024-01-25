const connection = require("./connection");

const GetAllOrders = async () => {
  const [AllOrders] = await connection.execute(`select * from pedido`);
  return AllOrders;
};

const GetOrderById = async (id) => {
  const [OrderById] = await connection.execute(
    `select * from pedido where id = ?`,
    [id]
  );
  return OrderById;
};

const CreateOrder = async (order) => {
  const { id, numero_pedido, data_pedido, cliente_id } = order;
  const [createdOrder] = await connection.execute(
    `insert into pedido (id, numero_pedido, data_pedido, cliente_id) values (?, ?, ?, ?)`,
    [id, numero_pedido, data_pedido, cliente_id]
  );
  return createdOrder;
};

const UpdateOrder = async (order) => {
  const { id, numero_pedido, data_pedido, cliente_id } = order;
  const [updatedOrder] = await connection.execute(
    `update pedido set numero_pedido = ?, data_pedido = ?, cliente_id = ? where id = ?`,
    [numero_pedido, data_pedido, cliente_id, id]
  );
  return updatedOrder;
};

const DeleteOrder = async (id) => {
  const [deletedOrder] = await connection.execute(
    `delete from pedido where id = ?`,
    [id]
  );
  return deletedOrder;
};

module.exports = {
  GetAllOrders,
  GetOrderById,
  CreateOrder,
  UpdateOrder,
  DeleteOrder,
};
