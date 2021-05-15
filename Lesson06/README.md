读写HTML
=========

## 知识点
- fs模块

官方文档：http://nodejs.cn/api/fs.html

## 实战演习

### index.html
```html
<html>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```
### server.js
```javascript
const http=require('http');
const fs=require('fs')

const server=http.createServer((req,res)=>{
    fs.readFile(__dirname+'/index.html','utf-8',(err,data)=>{
        if(err){
            res.setHeader('Content-Type','text/plain');//纯文本
            res.statusCode=404;
            res.end('404 Not Founded!')
        }else{
            res.setHeader('Content-Type','text/html');//html
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
```