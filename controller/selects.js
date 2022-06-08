const db = require('../config/db')

//            Clientes
async function selecionarCli(){;
    const conn = await db.mysqlConnection();
    const [rows] = await conn.query('SELECT * FROM clientes');
    return rows
}

//            Produtos
async function selecionarProd(){
    const conn = await db.mysqlConnection();
    const [rows] = await conn.query('SELECT * FROM produtos');
    return rows
}

//            Pedidos
async function selecionarPedidos(){
    const conn = await db.mysqlConnection();
    const [rows] = await conn.query(`
    select
        c.nome, c.cpf , prod.nome_prod, prod.valor_prod
    from
        produtos prod, clientes c, pedidos ped 
    where
        ped.cli_id = c.id 
    and
        ped.prod_id = prod.id;`)
    return rows
}

module.exports = { selecionarCli, selecionarProd, selecionarPedidos }