
const fs=require('fs')
const path=require('path');
const url=require('url');

function getMimeType(extname){
    let data=fs.readFileSync('./mime.json')
    let mimeObj=JSON.parse(data.toString())//转为对象
    return mimeObj[extname]
};

exports.static=function(req,res,staticPath){
    let pathname=url.parse(req.url,true).pathname
    pathname=pathname=='/'?'/index.html':pathname
    let extname=path.extname(pathname)
    fs.readFile('./'+staticPath+pathname,(err,data)=>{
        if(err){
            res.setHeader('Content-Type','text/plain');
            res.statusCode=404;
            res.end('404 Not Founded!')
        }else{
            let mime=getMimeType(extname)
            res.setHeader('Content-Type', mime+";charset='utf-8'");
            res.statusCode=200;
            res.end(data)
        }
    })
}