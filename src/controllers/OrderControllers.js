const order = require("../models/Order");

async function GetAllOrders(req, res) {
  try {
    const orderResponse = await order.GetAllOrders();
    res.json(orderResponse);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function GetOrderById(req, res) {
  const { id } = req.params;
  try {
    const orderResponse = await order.GetOrderById(id);
    return res.status(200).json(orderResponse);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function CreateOrder(req, res) {
  const orderRequest = {
    id: req.body.id,
    numero_pedido: req.body.numero_pedido,
    data_pedido: req.body.data_pedido,
    cliente_id: req.body.cliente_id,
  };
  try {
    const orderResponse = await order.CreateOrder(orderRequest);
    return res.status(200).json(orderResponse);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function UpdateOrder(req, res) {
  const orderRequest = {
    id: req.body.id,
    numero_pedido: req.body.numero_pedido,
    data_pedido: req.body.data_pedido,
    cliente_id: req.body.cliente_id,
  };
  try {
    const order = await order.UpdateOrder(orderRequest);
    return res.status(200).json(order);
  } catch (error) {
    res.json({ message: error });
  }
}

async function DeleteOrder(req, res) {
  try {
    const orderResponse = await order.DeleteOrder(req.params.id);
    return res.status(200).json(orderResponse);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  GetAllOrders,
  GetOrderById,
  CreateOrder,
  UpdateOrder,
  DeleteOrder,
};
