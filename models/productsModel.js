//Get products from this file
const products = require('../data/products');

//then we return that promise with those products.
function findAllProducts(){
  return new Promise((resolve, reject)=>{
    resolve(products);
  })
}

//export
module.exports={
  findAllProducts
};