const http=require('http');
const fs=require('fs')
const ejs=require('ejs')
const qs=require('querystring') //+ 处理用户提交的表单数据

var template=fs.readFileSync(__dirname+'/list.ejs','utf-8'); 
var posts=[] //+ 用户输入的内容

const server=http.createServer((req,res)=>{
    if(req.method==='POST'){
        req.data="";
        req.on("data",function(postDataChunk){
            req.data+=postDataChunk
        })        
        req.on("end",function(){
            //表单处理
            let query=qs.parse(req.data)//将数据进行内部解析，生成查询变量
            posts.push(query.content)//content就是取到表单name为content的内容
            showForm(posts,res)
        })
    }else{
        showForm(posts,res)
    }
})



//渲染页面
function showForm(posts,res){
    let data=ejs.render(template,{
        title:'列表',
        posts
    })
    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    res.end(data)
}

const hostname='127.0.0.1';
const port=3000;
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})