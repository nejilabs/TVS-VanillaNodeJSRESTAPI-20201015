//START: IMPORTS
const {getProducts, getProduct} = require('./controllers/productsControllers');
//END: IMPORTS

//START: Routes
function router(req,res){
  if(req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Home</h1>');
  }else if(req.url === '/api/products' && req.method === "GET"){
    getProducts(req,res) //From productsController.js
  } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){
    const id = req.url.split('/')[3]; //Create variable id
    getProduct(req,res,id); //From productsController.js
  }else{
    res.writeHead(404,{'Content-Type':'application/json'});
    res.end(JSON.stringify({message:'Route Not Found'}));
  }
}
//END: Routes

//START: EXPORTS
module.exports={
  router
};
//END: EXPORTS