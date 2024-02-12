const {MongoClient} = require('mongodb');
const url = "mongodb+srv://admin:capstoneproject@cluster0.vzztiaj.mongodb.net/";
const dbName = "capstonedb";

let categories;
let products;
let orders;

let client = new MongoClient(url);
client.connect();
var db = client.db(dbName)
categories = db.collection("categories");
products = db.collection("products");
orders = db.collection("orders");

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
module.exports.findProductById = async function(oid,callback){
    let dataP = products.find({_id:str(oid)}).toArray();
    callback(dataP)
};
module.exports.findProductsByCategory = async function(category_id,callback){
    let prodArray = await products.find({category_id:category_id}).toArray();
    callback(prodArray);
}
module.exports.findProductsByAnimal = async function(animal,callback){
    let prodArray = await products.find({animal:animal}).toArray();
    callback(prodArray);
}
module.exports.findRecommendedProducts = async function(oid,count,callback){
    let prodArray = await products.find({_id:oid}).toArray();
    callback(prodArray);
}

module.exports.findPopularProducts = async function (n_products,callback) {
      // Aggregation pipeline
      let n = Number(n_products)
      let pipeline = [
        {
          $sort: { popularity: -1 }
        },
        {
          $limit: n // desired number of products
        }
      ];
      let prodCursor = await products.aggregate(pipeline);
      let popularProducts = [];
      for await (const doc of prodCursor) {
        popularProducts.push(doc);
      }
      popularProducts.forEach(prod => {
        prod._id = prod._id.toString();
        prod.released = prod.released.toString();
      });
      callback(JSON.stringify(popularProducts));
  };

module.exports.uploadOrder = async function(req,callback){
    let body = req;
    let orderInfo = {};
    if(body){
        orderInfo = body;
    }
    const prodIds = [];
    orderInfo?.products?.forEach(prod => {
      prodIds.push(prod._id);
      delete prod._id;
    });
    let record = orderInfo;
    record.products = prodIds;
    await orders.insertOne(record,function(err,res){console.log(err)});
    callback(record);
}