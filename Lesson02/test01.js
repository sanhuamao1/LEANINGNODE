//阻塞处理
function updb1(){
    let start =new Date().getTime()
    while (new Date().getTime()<start+3000);
}
updb1()
console.log('数据库更新成功！')