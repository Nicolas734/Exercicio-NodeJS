async function mysqlConnection(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            database: 'ex4',
            password: 'cadmax123'
        }
    );
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = {  mysqlConnection }