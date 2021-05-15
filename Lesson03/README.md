搭建http服务器
=============
## 知识点
- http内置模块

> 参考文档：http://nodejs.cn/api/http.html

## 实战演习
```js
const http=require('http');
const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World')
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
```

## 辅助工具
一般情况下，每次更代码都需重新启动服务器，否则页面将没有变化。`supervisor`工具可以在不用重复启动服务器的情况下就能看到页面变化：

**全局安装**
```bash
npm install -g supervisor
```
使用supervisor**替代**node命令来运行程序
```bash
supervisor app.js
```
