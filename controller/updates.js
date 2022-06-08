const db = require("../config/db")

//            Clientes
async function updateCli( id, dados ){
    const conn = await db.mysqlConnection()
    const sql = "UPDATE clientes SET nome=?, email=?, cpf=?, telefone=? WHERE id=?"
    const values = [dados.nome, dados.email, dados.cpf, dados.telefone, id]
    return await conn.query(sql, values)
}

//            Produtos
async function updateProd( id, dados ){
    const conn = await db.mysqlConnection()
    const sql = "UPDATE produtos SET nome_prod=?, descricao=?, valor_prod=? WHERE id=?"
    const values = [dados.nome_prod, dados.descricao, dados.valor_prod, id]
    return await conn.query(sql, values)
}

//            Pedidos
async function updatePed( id, dados ){
    const conn = await db.mysqlConnection()
    const sql = "UPDATE pedidos SET prod_id=? WHERE id=?"
    const values = [dados.prod_id, id]
    return await conn.query(sql, values)
}

module.exports = { updateCli, updateProd, updatePed, }