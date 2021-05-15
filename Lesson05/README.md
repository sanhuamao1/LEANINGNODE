URL指引方向
==========

## 知识点
- req.url

## 实战演习
```javascript
const http=require('http');
const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    
    switch(req.url){
        case '/':
            res.end('Hello World');
            break;
        case '/about':
            res.end('This is about page')
            break;
        case '/home':
            res.end('Welcome to myhomepage')
            break;
        default:
            res.end('404 NOT FOUND!')
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
```