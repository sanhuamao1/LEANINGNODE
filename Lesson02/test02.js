function updb2(done){
    setTimeout(()=>{
        done()
    },3000)
}
updb2(function(){
    console.log('数据库更新成功！')
})
console.log('其他语句')