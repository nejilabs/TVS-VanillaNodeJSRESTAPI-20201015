//START: IMPORTS
const {
  controllerGetAllProducts, 
  controllerGetProductById,
  controllerCreateProduct,
  controllerUpdateProduct
} = require('./controllers/productsControllers');
//END: IMPORTS

//START: ROUTES
function router(req,res){
  //START: Index
  if(req.url === '/'){ 
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Home</h1>');
  }
  //END: Index

  //START: Get All Products
  else if(req.url === '/api/products' && req.method === "GET"){
    controllerGetAllProducts(req,res); //From productsController.js

  } 
  //END: Get All Products

  //START: Get Product by Id
  else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){
    const id = req.url.split('/')[3]; //Create variable id
    controllerGetProductById(req,res,id); //From productsController.js
  }
  //END: Get Product by Id

  //START: Create Product
  else if(req.url === '/api/products' && req.method === "POST"){controllerCreateProduct(req,res);} 
  //END: Create Product

  //START: Update Product
  else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT') {
    const id = req.url.split('/')[3]
    controllerUpdateProduct(req, res, id)
  }
  //END: Update Product

  //START: If Route does not Exist
  else{
    res.writeHead(404,{'Content-Type':'application/json'});
    res.end(JSON.stringify({message:'Route Not Found'}));
  }
  //END: If Route does not Exist
}
//END: ROUTES

//START: EXPORTS
module.exports={
  router
};
//END: EXPORTS