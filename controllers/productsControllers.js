//Import Product Models
const Product = require('../models/productsModel');

//START: controllerGetAllProducts | @desc Gets All Products | @route GET /api/products
async function controllerGetAllProducts(req,res) {
  try{
    //fetch data
    const products = await Product.modelGetAllProducts(); //From Models

    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(products));
  }catch(error){
    console.log(error);
  }
}
//END: controllerGetAllProducts | @desc Gets All Products | @route GET /api/products

//START: controllerGetProductById | @desc Get Single Product | @route GET /api/products/:id
async function controllerGetProductById(req,res,id) {
  try{
    const product = await Product.modelGetProductById(id); //From Models

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
//END: controllerGetProductById | @desc Get Single Product | @route GET /api/products/:id


//START: controllerCreateProduct | @desc Create a Product | @route POST /api/products
async function controllerCreateProduct(req,res) {
  try{
    const product = {
      title:'Test Product',
      description:'This is my product',
      price:100
    }; //Create product object

    const newProduct = Product.create(product);
    res.writeHead(201,{'Content-Type':'application/json'});
    return res.end(JSON.stringify(newProduct));
  }catch(error){
    console.log(error);
  }
}
//END: controllerCreateProduct | @desc Create a Product | @route POST /api/products


module.exports={
  controllerGetAllProducts, controllerGetProductById, controllerCreateProduct
}