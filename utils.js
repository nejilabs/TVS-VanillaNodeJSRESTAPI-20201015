const fs = require('fs');

//START: utilWriteDataToFile
function utilWriteDataToFile(filename,content){
  fs.writeFileSync(filename,JSON.stringify(content),'utf8',(err)=>{
    if(err){
      console.log(err);
    }
  })
}
//END: utilWriteDataToFile


//START: utilGetPostData
function utilGetPostData(req){
  return new Promise((resolve,reject)=>{
    try{
      let body='';
      req.on('data',(contentsOfTheBody)=>body += contentsOfTheBody.toString());
      req.on('end',()=>resolve(body));
    }catch(error){
      reject(error);
    }
  })
}
//END: utilGetPostData

module.exports={
  utilWriteDataToFile, utilGetPostData
}