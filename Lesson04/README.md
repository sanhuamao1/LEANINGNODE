公开与引入模块
=============

## 知识点
- exports、module.exports：公开文件
- require：引用外部文件

## 实战演习
### config.js
```javascript
const config={
    hostname:'127.0.0.1',
    port:3000
}
exports.config=config
```
### server.js
```javascript
const http=require('http');
const config=require('./config').config

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World')
})

server.listen(config.port,config.hostname,()=>{
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
})
```

## 补充
默认情况下js文件是私有的。要让外部访问，可通过`exports`或`module.exports`暴露，上面的公开配置还能这样写：
```javascript
const config={
    hostname:'127.0.0.1',
    port:3000
}
module.exports=config

//引入
const config=require('./config')
```
区别在于`exports`可以公开多个独立属性或方法。而`module.exports`通常暴露一个对象。