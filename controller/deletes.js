const db = require("../config/db")

//            Clientes
async function deleteCli (id){
    const conn = await db.mysqlConnection();
    const sql = "DELETE FROM clientes WHERE id=?";
    return await conn.query(sql, [id]);
}

//            Produtos
async function deleteProd (id){
    const conn = await db.mysqlConnection();
    const sql = "DELETE FROM produtos WHERE id=?";
    return await conn.query(sql, [id]);
}

//            Pedidos
async function deletePed (id){
    const conn = await db.mysqlConnection();
    const sql = "DELETE FROM pedidos WHERE id=?";
    return await conn.query(sql, [id]);
}

module.exports = { deleteCli, deleteProd, deletePed }