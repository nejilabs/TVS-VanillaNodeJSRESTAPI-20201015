//START: IMPORT
const products = require('../data/products'); //Get Products Data from this file
// const {v4:uuidv4} = require('uuid');
//END: IMPORT

// START: findAllProducts
function modelGetAllProducts(){
  //then we return that promise with those products.
  return new Promise((resolve, reject)=>{
    resolve(products);
  })
}
// END: findAllProducts

// START: findProductById
function modelGetProductById(id){
  return new Promise((resolve, reject)=>{
    const product = products.find((p)=>p.id === id); //Find that specific product with that id
    resolve(product);
  })
}
// END: findProductById


// START: modelCreateProduct
// function modelCreateProduct(id){
//   return new Promise((resolve, reject)=>{
//     const product = products.find((p)=>p.id === id); //Find that specific product with that id
//     resolve(product);
//   })
// }
// END: createProduct


//START: EXPORT
module.exports={
  modelGetAllProducts,
  modelGetProductById,
  // modelCreateProduct
};
//END: EXPORT