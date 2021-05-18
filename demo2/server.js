const http=require('http');
const fs=require('fs')
const path=require('path');
const common=require('./modules');

const server=http.createServer((req,res)=>{
    let pathname=req.url
    pathname=pathname=='/'?'/index.html':pathname
	let extname=path.extname(pathname)
    fs.readFile('./static'+pathname,(err,data)=>{
        if(err){
        	res.setHeader('Content-Type','text/plain');
            res.statusCode=404;
            res.end('404 Not Founded!')
        }else{
            let mime=common.getMimeType(extname)
            res.setHeader('Content-Type', mime+";charset='utf-8'");
            res.statusCode=200;
            res.end(data)
        }
    })
})

const hostname='127.0.0.1';
const port=3000;
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})