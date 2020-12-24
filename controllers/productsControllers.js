//Bring our models
const Product = require('../models/productModel');

async function getProducts(req,res) {
  try{
    //feteh data
    const products = await Product.findAllProducts();

    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(products));
  }catch(error){
    console.log(error);
  }
}

module.exports={
  getProducts
}