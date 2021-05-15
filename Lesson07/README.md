npm与ejs的使用
=============

## 知识点
- npm的使用方法
- ejs的使用

npm是Nodejs附带的第三方软件包管理器。是世界上最大的开放源代码的生态系统，可通过它下载各种各样的包，为Nodejs提供更多的功能支持。

## npm官网
https://www.npmjs.com/

## ejs(effective JavaScript template)
https://www.npmjs.com/package/ejs


## 实战演习
```bash
npm install ejs
```
**helo.ejs**
```html
<html>
    <title><%= title %></title>
    <body>
        <%- content %>
    </body>
</html>
```
**server.js**
```javascript
const http=require('http');
const fs=require('fs')
const ejs=require('ejs')
var template=fs.readFileSync(__dirname+'\\.\\helo.ejs','utf-8'); //相当于./helo.ejg

const server=http.createServer((req,res)=>{
    var data=ejs.render(template,{
        title:'helo ejs',
        content:'<strong>big helo ejs.</strong>'
    })
    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    res.end(data)
})

const hostname='127.0.0.1';
const port=3000;
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
```

## 补充：npm包与依赖
https://www.cnblogs.com/sanhuamao/p/14759270.html
