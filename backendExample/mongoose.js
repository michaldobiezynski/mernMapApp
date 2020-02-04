const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose
  .connect(
    'mongodb+srv://michal123:michal123@devconnector-6tf9d.mongodb.net/products_test?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async (req, res, next) => {
  
}

exports.createProduct = createProduct;
