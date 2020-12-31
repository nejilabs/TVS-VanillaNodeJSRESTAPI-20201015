//START: Imports
const Product = require('../models/productsModel'); // Product Model
const {utilGetPostData} = require('../utils'); //Utilities
//END: Imports

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
    const body = await utilGetPostData(req);
    const {title,description,price} = JSON.parse(body); //We then parse the body then use object destructuring to get the title, description, and price.
    
    const product = {title,description,price} //we then create an object with contents we got from the parsed body
    const newProduct = await Product.modelCreateProduct(product); //then we pass that into the model to create the new product
    
    res.writeHead(201,{'Content-Type':'application/json'}); //then we respond with that new product
    return res.end(JSON.stringify(newProduct));
  }catch(error){
    console.log(error);
  }
}
//END: controllerCreateProduct | @desc Create a Product | @route POST /api/products


//START: controllerUpdateProduct | @desc Update a Product | @route PUT /api/products/:id
async function controllerUpdateProduct(req, res, id) {
  try {
      const product = await Product.modelGetProductById(id)

      if(!product) {
          res.writeHead(404, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ message: 'Product Not Found' }))
      } else {
          const body = await utilGetPostData(req)

          const { title, description, price } = JSON.parse(body)

          const productData = {
              title: title || product.title,
              description: description || product.description,
              price: price || product.price
          }

          const updProduct = await Product.modelUpdateProduct(id, productData)

          res.writeHead(200, { 'Content-Type': 'application/json' })
          return res.end(JSON.stringify(updProduct)) 
      }


  } catch (error) {
      console.log(error)
  }
}
//END: controllerUpdateProduct | @desc Update a Product | @route PUT /api/products/:id


module.exports={ 
  controllerGetAllProducts, 
  controllerGetProductById, 
  controllerCreateProduct,
  controllerUpdateProduct
}