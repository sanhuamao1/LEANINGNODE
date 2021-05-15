非阻塞处理
==========

## 知识点
- 阻塞处理（Java,Ruby,PHP,Asp,Net）
- 非阻塞处理(Node.js)

## 实战演戏
**阻塞处理**：后边的语句无法执行，除非前面的执行完毕
```javascript
function updb1(){
    let start =new Date().getTime()
    while (new Date().getTime()<start+3000);
}
updb1()
console.log('数据库更新成功！')
console.log('其他语句')
```
**非阻塞处理**：继续执行后面的。（必须提供回调函数）
```javascript
function updb2(done){
    setTimeOut(()=>{
        done()
    },3000)
}
updb2(function(){
    console.log('数据库更新成功！')
})
console.log('其他语句')
```
