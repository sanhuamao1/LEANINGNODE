const http=require('http');
const fs=require('fs')
const ejs=require('ejs')
const qs=require('querystring') //+ 处理用户提交的表单数据

var template=fs.readFileSync(__dirname+'/forum.ejs','utf-8'); 
var posts=[] //+ 用户输入的内容

const server=http.createServer((req,res)=>{
    if(req.method==='POST'){
        //表单提交
        req.data="";
        //监听可读事件
        req.on("readable",function(){
            //表单数据收集：如果数据流没有结束，继续添加
            let chr=req.read();
            if(chr){
                req.data+=chr
            }
        })
        
        req.on("end",function(){
            //表单处理
            let query=qs.parse(req.data)//将数据进行内部解析，生成查询变量
            posts.push(query.content)//content就是取到表单name为content的内容
            showForm(posts,res)
        })
    }else{
        //表单显示
        showForm(posts,res)
    }
})

const hostname='127.0.0.1';
const port=3000;
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})

function showForm(posts,res){
    let data=ejs.render(template,{
        title:'小论坛',
        posts
    })
    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    res.end(data)
}