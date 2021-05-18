const fs=require('fs')
exports.getMimeType=function (extname){
    let data=fs.readFileSync('./mime.json') 
    let mimeObj=JSON.parse(data.toString())//转为对象
    return mimeObj[extname]
};