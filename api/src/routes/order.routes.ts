import { Router } from 'express';

//Import Routes
import { OrderApi, createOrder, getOrder, updateOrder } from '../controllers/order.controller';

const router = Router();

router.route("/")
  .get(OrderApi)
  .post(createOrder)

router.route("/:orderId")
  .get(getOrder)
  .put(updateOrder)

export default router