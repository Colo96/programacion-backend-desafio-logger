const { faker } = require("@faker-js/faker");

faker.locale = "es";

const generateProduct = () => {
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.product(),
    price: faker.commerce.price(),
    stock: faker.datatype.number(500),
    thumbnail_url: faker.image.image(),
  };
};

const generateBusiness = () => {
  const totalProducts = faker.datatype.number({ max: 15, min: 1 });
  const products = Array.from({ length: totalProducts }, () =>
    generateProduct()
  );
  const productIds = [];
  products.map((product) => productIds.push(product.id));
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.name.jobTitle(),
    products: productIds,
  };
};

const generateOrder = () => {
  const totalProducts = faker.datatype.number({ max: 15, min: 1 });
  const products = Array.from({ length: totalProducts }, () =>
    generateProduct()
  );
  const productsInfo = [];
  products.map((product) => {
    const newProduct = {
      quantity: faker.random.numeric(2),
      price: product.price,
    };
    productsInfo.push(newProduct);
  });
  return {
    id: faker.database.mongodbObjectId(),
    order_number: faker.finance.pin(8),
    business: faker.database.mongodbObjectId(),
    user: faker.database.mongodbObjectId(),
    status: "PENDING",
    products: productsInfo,
    total_price: faker.random.numeric(5),
  };
};

const generateUser = () => {
  const totalOrders = faker.datatype.number({ max: 15, min: 1 });
  const orders = Array.from({ length: totalOrders }, () => generateOrder());
  const ordersIds = [];
  orders.map((order) => ordersIds.push(order.id));
  return {
    id: faker.database.mongodbObjectId(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    role: "USER",
    orders: ordersIds,
  };
};

module.exports = {
  generateProduct,
  generateBusiness,
  generateOrder,
  generateUser,
};
