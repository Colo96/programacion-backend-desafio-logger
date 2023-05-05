const { Router } = require("express");
const businessesRouter = require('./businesses/businesses.router');
const productsRouter = require('./products/products.router');
const usersRouter = require('./users/users.router');
const ordersRouter = require('./orders/orders.router');

const router = Router();

router.use('/businesses', businessesRouter);
router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);

module.exports = router;