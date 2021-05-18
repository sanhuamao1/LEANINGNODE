const MongoClient=require('mongodb').MongoClient
const test=require('assert')
const url='mongodb://127.0.0.1:27017'
const dbName='mydata'


MongoClient.connect(url, function(err, client) {
    test.equal(null, err);
    const db = client.db(dbName)
    console.log('链接数据库成功')
    db.collection("posts").insertMany(
        [
            {title:"今天不是很热",tag:"life"},
            {title:"外卖还没到，非常饿！",tag:"life"},
            {title:"我爱学习",tag:"study"},
        ],
        (err,result)=>{
            test.equal(null,err)
            client.close();
        }
    )
});
