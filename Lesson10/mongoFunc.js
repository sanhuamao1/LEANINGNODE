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
    //     let list=[
    //         {title:"试试连接",tag:"test"},
    //         {title:"继续学习",tag:"study"},
    //     ]
    //     collection.insert(list,(err,result)=>{
    //         test.equal(null,err)
    //         client.close();
    //     })
    // })
    
    //第二种写法：
    adminDb.collection("posts").insert(
        [
            {title:"试试连接",tag:"test"},
            {title:"继续学习",tag:"study"},
        ],
        (err,result)=>{
            test.equal(null,err)
            client.close();
        }
    )
});
