//START: IMPORT
const products = require('../data/products'); //Get Products Data from this file
const { v4: uuidv4 } = require('uuid');
const {utilWriteDataToFile} = require('../utils');
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
function modelCreateProduct(product) {
  return new Promise((resolve, reject) => {
      const newProduct = {id: uuidv4(), ...product};
      products.push(newProduct);

      utilWriteDataToFile('./data/products.json', products);

      resolve(newProduct);
  })
}
// END: createProduct


//START: EXPORT
module.exports={
  modelGetAllProducts,
  modelGetProductById,
  modelCreateProduct
};
//END: EXPORT