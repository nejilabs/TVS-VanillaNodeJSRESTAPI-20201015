//Import Product Models
const Product = require('../models/productsModel');

//START: getProducts | @desc Gets All Products | @route GET /api/products
async function getProducts(req,res) {
  try{
    //fetch data
    const products = await Product.findAllProducts(); //From Models

    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(products));
  }catch(error){
    console.log(error);
  }
}
//END: getProducts | @desc Gets All Products | @route GET /api/products

//START: getProduct | @desc Get Single Product | @route GET /api/products/:id
async function getProduct(req,res,id) {
  try{
    const product = await Product.findProductById(id); //From Models

    if (!product){
      //If Product DOES NOT Exist
      res.writeHead(404,{'Content-Type':'application/json'}); //Return 404
      res.end(JSON.stringify({message:'Product Not Found'})); //Display Product Not Found
    }else{
      //If Product DOES Exist
      res.writeHead(200,{'Content-Type':'application/json'});
      res.end(JSON.stringify(product));
    }
  }catch(error){
    console.log(error);
  }
}
//END: getProduct | @desc Get Single Product | @route GET /api/products/:id



module.exports={
  getProducts, getProduct
}