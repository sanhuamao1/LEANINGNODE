读取mongodb文档
================

## 知识点
- 读取mongodb文档

## 实战演习
### mongoFunc.js
```javascript
const MongoClient=require('mongodb').MongoClient
const test=require('assert')
const url='mongodb://127.0.0.1:27017'
const dbName='mydata'

MongoClient.connect(url, function(err, client) {
    test.equal(null, err);
    const adminDb = client.db(dbName)
    console.log('链接数据库成功')
    //第一种写法
    // adminDb.collection("posts",(err,collection)=>{
    //     collection.find({tag:"test"}).toArray((err,docs)=>{
    //         test.equal(null, err);
    //         console.log(docs)
    //         client.close()
    //     })
    // })
    //第二种写法
    adminDb.collection("posts").find({tag:"test"}).toArray((err,docs)=>{
        test.equal(null, err);
        console.log(docs)
        client.close()
    })
});
```

