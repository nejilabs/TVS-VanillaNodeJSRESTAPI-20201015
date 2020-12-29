//START: IMPORT
const products = require('../data/products'); //Get Products Data from this file
//END: IMPORT

// START: findAllProducts
function findAllProducts(){
  //then we return that promise with those products.
  return new Promise((resolve, reject)=>{
    resolve(products);
  })
}
// END: findAllProducts

// START: findProductById
function findProductById(id){
  return new Promise((resolve, reject)=>{
    const product = products.find((p)=>p.id === id); //Find that specific product with that id
    resolve(product);
  })
}
// END: findProductById

//START: EXPORT
module.exports={
  findAllProducts,
  findProductById
};
//END: EXPORT