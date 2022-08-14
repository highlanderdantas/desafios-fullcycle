const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)


app.get('/', (req,res) => {

    let r = (Math.random() + 1).toString(36).substring(7);
    let name = "Highlander" + r;
    const sql = `INSERT INTO people(name) values(name)`
    connection.query(sql)
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, ()=> {

    const sql = `CREATE TABLE IF NOT EXISTS people(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(40) NOT NULL)`
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

    console.log('Rodando na porta ' + port)
})