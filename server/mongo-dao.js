const mongodb = require("mongodb");
const {MongoClient} = require('mongodb');

const url = "mongodb+srv://admin:capstoneproject@cluster0.vzztiaj.mongodb.net/";
const dbName = "capstonedb";

let categories;
let products;
let orders;

async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db(dbName)
    categories = db.collection("categories");
    products = db.collection("products");
    orders = db.collection("orders");
}
startup();

module.exports.getCategories = function (callback) {
    let dataPromise = categories.find({}).toArray();
    dataPromise.then((char) => callback(char));
};
module.exports.getProducts = function (callback) {
    let dataPromise = products.find({}).toArray();
    dataPromise.then((char) => callback(char));
};
module.exports.getOrders = function (callback) {
    let dataPromise = orders.find({}).toArray();
    dataPromise.then((char) => callback(char));
};
module.exports.findProductsByCategory = async function(category_id,callback){
    let prodArray = await products.find({category_id:category_id}).toArray();
    callback(prodArray);
}
module.exports.findProductsByAnimal = async function(animal,callback){
    let prodArray = await products.find({animal:animal}).toArray();
    callback(prodArray);
}
module.exports.findPopularProducts = async function (n_products) {
      // Efficient aggregation pipeline for sorting and limiting
      let n = Number(n_products)
      let pipeline = [
        {
          $sort: { popularity: -1 } // Sort
        },
        {
          $limit: n // Limit to the desired number of products
        }
      ];
      // Use aggregation to sort and retrieve products
      let prodCursor = products.aggregate(pipeline);
      let popularProducts = []
      for await (const doc of prodCursor) {
        popularProducts.push(doc)
      }
      return popularProducts;
  };