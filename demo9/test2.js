// Promise
function dbupAsync(sql) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(sql + " upd ok.");
            resolve(sql + ".ok");
        }, 800)
    });
    return p;
}
dbupAsync("2.sql1")
    .then(() => dbupAsync("2.sql2"))
    .then(() => dbupAsync("3.sql3"));

upAllDB();