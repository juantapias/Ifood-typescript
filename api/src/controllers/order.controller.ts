import { Request, Response } from 'express';
import Order from "../models/orders";

import {IOrder} from '../models/orders'

export async function OrderApi (req: Request, res: Response): Promise<Response> {
  const order = await Order.findAll()
  return res.json(order);
}

export async function createOrder (req: Request, res: Response): Promise<Response> {
  const newOrder: IOrder = req.body;
  const order = await Order.create(newOrder)
  return res.json(order)
}

export async function getOrder (req: Request, res: Response): Promise<Response> {
  const id = req.params.orderId;
  const order = await Order.findOne({ where: { id: id } })
  return res.json(order);
}

export async function updateOrder (req: Request, res: Response): Promise<Response> {
  const id = req.params.orderId;
  const order = Order.update(req.body, { where: { id: id } })
  return res.json(order);
}