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
    let prodArray = await products.find({category:ObjectId(category_id)}).toArray();
    callback(prodArray);
}
module.exports.findPopularProducts = async function (n_products) {
    try {
      // Efficient aggregation pipeline for sorting and limiting
      const pipeline = [
        {
          $sort: { popularity: -1 } // Sort descending by popularity
        },
        {
          $limit: n_products // Limit to the desired number of products
        }
      ];
  
      // Use aggregation to sort and retrieve products
      const popularProducts = await products.aggregate(pipeline);
  
      // Error handling (optional, but recommended)
      if (!popularProducts) {
        throw new Error('API Error retrieving popular products');
      }
  
      return popularProducts;
    } catch (error) {
      console.error('Error:', error);
      // Handle errors appropriately, e.g., return an error response
      return ["ERROR"];
    }
  };