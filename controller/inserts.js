const db = require('../config/db')

//            Clientes
async function inserirCliente (dados){
    const conn = await db.mysqlConnection();
    const sql = "INSERT INTO clientes (nome, email, cpf, telefone) values ( ? ,? ,? ,? )";
    const values = [ dados.nome, dados.email, dados.cpf, dados. telefone];
    return await conn.query( sql, values )
}

//            Produtos
async function inserirProdutos (dados){
    const conn = await db.mysqlConnection()
    const sql = "INSERT INTO produtos ( nome_prod, descricao, valor_prod ) values ( ? ,? ,? )"
    const values = [ dados.nome_prod, dados.descricao, dados.valor_prod]
    return await conn.query( sql, values)
}

//            Pedidos
async function inserirPedido (dados){
    const conn = await db.mysqlConnection()
    const sql = "INSERT INTO pedidos ( cli_id, prod_id ) values ( ?, ? )"
    const values = [ dados.cli_id, dados.prod_id ]
    return await conn.query( sql, values)
}

module.exports = { inserirCliente, inserirProdutos, inserirPedido, }