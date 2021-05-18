const http=require("http")
const app=require('./module/route')
const ejs=require('ejs')
const qs=require('querystring')

const MongoClient=require('mongodb').MongoClient
const test=require('assert')
const url='mongodb://127.0.0.1:27017'
const dbName='mydata'

http.createServer(app).listen(3000)

app.get('/',(req,res)=>{
    ejs.renderFile("./views/index.html",{},(err,data)=>{
        res.send(data)
    })
})

app.get('/register',(req,res)=>{
    ejs.renderFile("./views/register.ejs",{},(err,data)=>{
        res.send(data)
    })
})

app.get('/userlist',(req,res)=>{
    MongoClient.connect(url, function(err, client) {
        test.equal(null, err);
        const db = client.db(dbName)
        console.log('链接数据库成功')
        db.collection("users").find().toArray((err,result)=>{
            test.equal(null, err);
            ejs.renderFile("./views/userlist.ejs",{
                users:result
            },(err,data)=>{
                res.send(data)
                console.log('获取成功')
                client.close()
            })  
        })
    });
    
})

app.post('/submit',(req,res)=>{
    let body=qs.parse(req.body)
    MongoClient.connect(url, function(err, client) {
        test.equal(null, err);
        const db = client.db(dbName)
        console.log('链接数据库成功')
        db.collection("users").insertOne(
            body,
            (err,result)=>{
                test.equal(null,err)
                console.log('注册成功！')
                res.send('注册成功！')
                client.close();
            }
        )
    });
})