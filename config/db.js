async function mysqlConnection(){
    require('dotenv').config()
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            database: process.env.BD,
            password: process.env.BD_SENHA
        }
    );
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = {  mysqlConnection }