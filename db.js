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




//  --------- SELECTS ---------

//            Clientes
async function selecionarCli(){;
    const conn = await mysqlConnection();
    const [rows] = await conn.query('SELECT * FROM clientes');
    return rows
}

//            Produtos
async function selecionarProd(){
    const conn = await mysqlConnection();
    const [rows] = await conn.query('SELECT * FROM produtos');
    return rows
}

//            Pedidos
async function selecionarPedidos(){
    const conn = await mysqlConnection();
    const [rows] = await conn.query(`
    select c.nome, c.cpf , prod.nome_prod, prod.valor_prod
        from produtos prod, clientes c, pedidos ped 
    where
        ped.cli_id = c.id 
    and
        ped.prod_id = prod.id;`)
    return rows
}





//  --------- INSERTS ---------

//            Clientes
async function inserirCliente (dados){
    const conn = await mysqlConnection();
    const sql = "INSERT INTO clientes (nome, email, cpf, telefone) values ( ? ,? ,? ,? )";
    const values = [ dados.nome, dados.email, dados.cpf, dados. telefone];
    return await conn.query( sql, values )
}

//            Produtos
async function inserirProdutos (dados){
    const conn = await mysqlConnection()
    const sql = "INSERT INTO produtos ( nome_prod, descricao, valor_prod ) values ( ? ,? ,? )"
    const values = [ dados.nome_prod, dados.descricao, dados.valor_prod]
    return await conn.query( sql, values)
}

//            Pedidos
async function inserirPedido (dados){
    const conn = await mysqlConnection()
    const sql = "INSERT INTO pedidos ( cli_id, prod_id ) values ( ?, ? )"
    const values = [ dados.cli_id, dados.prod_id ]
    return await conn.query( sql, values)
}




//  --------- UPDATE ---------

//            Clientes
async function updateCli (id,dados){
    const conn = await mysqlConnection()
    const sql = "UPDATE clientes SET nome=?, email=?, cpf=?, telefone=? WHERE id=?"
    const values = [dados.nome, dados.email, dados.cpf, dados.telefone, id]
    return await conn.query(sql, values)
}

//            Produtos
async function updateProd (id,dados){
    const conn = await mysqlConnection()
    const sql = "UPDATE produtos SET nome_prod=?, descricao=?, valor_prod=? WHERE id=?"
    const values = [dados.nome_prod, dados.descricao, dados.valor_prod, id]
    return await conn.query(sql, values)
}

//            Pedidos
async function updatePed (id,dados){
    const conn = await mysqlConnection()
    const sql = "UPDATE pedidos SET prod_id=? WHERE id=?"
    const values = [dados.prod_id, id]
    return await conn.query(sql, values)
}



//  --------- DELETE ---------

//            Clientes
async function deleteCli (id){
    const conn = await mysqlConnection();
    const sql = "DELETE FROM clientes WHERE id=?";
    return await conn.query(sql, [id]);
}

//            Produtos
async function deleteProd (id){
    const conn = await mysqlConnection();
    const sql = "DELETE FROM produtos WHERE id=?";
    return await conn.query(sql, [id]);
}

//            Pedidos
async function deletePed (id){
    const conn = await mysqlConnection();
    const sql = "DELETE FROM pedidos WHERE id=?";
    return await conn.query(sql, [id]);
}


module.exports = {  selecionarCli, selecionarProd, selecionarPedidos,
                    inserirCliente, inserirProdutos, inserirPedido,
                    updateCli, updateProd, updatePed,
                    deleteCli, deleteProd, deletePed
    }