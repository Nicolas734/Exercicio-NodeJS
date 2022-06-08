(async () => {

    const db = require("./db");
    console.log('Aplicação rodando')

    console.log('Inserindo Clientes')
    const insertCli = await db.inserirCliente({ nome:'Nicolas', email:'nichollaslimma734@gmial.com', cpf:3223, telefone:3232323 })
    console.log('Cliente Inserido com Sucesso')

    console.log('Inserido Produtos');
    const insertProd = await db.inserirProdutos({ nome_prod:'minoxidil', descricao:'produto para calvos', valor_prod: 28.00 })
    console.log('Produto Inserido com Sucesso');

    console.log('Inserido Produtos');
    const insertPed = await db.inserirPedido({ cli_id:7, prod_id:5})
    console.log('Produto Inserido com Sucesso');

    console.log('Selecionar Clientes')
    const listClli = await db.selecionarCli()
    console.log(listClli)

    console.log('Selecionar Produtos')
    const listProd = await db.selecionarProd()
    console.log(listProd);

    console.log('Selecionar Pedidos');
    const listPed = await db.selecionarPedidos()
    console.log(listPed);

    console.log('Atualizar Cliente')
    const updateCli = await db.updateCli( 1, { nome:'Lima', email:'limma734@gmial.com', cpf:55555, telefone:555555 })
    console.log('Dados do Cliente Atualizados com sucesso');

    console.log('Atualizar Pedido')
    const updateProd = await db.updateProd( 1, {  nome_prod:'menta', descricao:'balinha da boa', valor_prod: 2.00 })
    console.log('Dados do Pedido Cliente Atualizados com sucesso');

    console.log('Atualizar Produtos')
    const updatePed = await db.updatePed( 2, { prod_id:'3' })
    console.log('Dados do Produto do Cliente Atualizados com sucesso');

    console.log('Atualizar Pedido')
    const deleteCli = await db.deleteCli(3)
    console.log('Cliente Deletado');

    console.log('Atualizar Pedido')
    const deleteProd = await db.deleteProd(3)
    console.log('Produto Deletado');

    console.log('Atualizar Pedido')
    const deletePed = await db.deletePed(7)
    console.log('Pedido Deletado');

})()