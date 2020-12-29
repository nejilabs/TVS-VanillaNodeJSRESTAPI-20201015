const http = require('http');
const {getProducts, getProduct} = require('./controllers/productsControllers');

const server = http.createServer((req,res)=>{
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
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));