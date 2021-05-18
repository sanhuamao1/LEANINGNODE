// async/await
function dbupAsync(sql) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(sql + " upd ok.");
            resolve(sql + ".ok");
        }, 800)
    });
    return p;
}

async function upAllDB() {
    const result1 = await dbupAsync("3.sql1");
    const result2 = await dbupAsync("3.sql2");
    const result3 = await dbupAsync("3.sql3");
    console.log(result1, result2, result3);
}

upAllDB();
