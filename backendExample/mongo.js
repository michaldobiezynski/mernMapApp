const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://michal123:michal123@devconnector-6tf9d.mongodb.net/products_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
