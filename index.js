(async () => {

    const insert = require('./controller/inserts')
    const select = require('./controller/selects')
    const update = require('./controller/updates')
    const del = require('./controller/deletes')
    const prompt = require('prompt-sync')()

    console.log('Aplicação rodando')

    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar produto`);
    console.log(`3 - Cadastrar pedido`);
    console.log(`4 - Listar clientes`);
    console.log(`5 - Listar produtos`);
    console.log(`6 - Listar pedidos`);
    console.log(`7 - Atualizar cliente`);
    console.log(`8 - Atualizar produto`);
    console.log(`9 - Atualizar pedido`);
    console.log(`10 - Remover cliente`);
    console.log(`11 - Remover produto`);
    console.log(`12 - Remover cliente`);

    let option = parseInt(prompt(`Por favor, escolha uma opção: `));

        switch(option){
            case 1:
                console.log(`Início do cadastro do cliente.\n`);

                let nomeCli = prompt("Digite o nome do cliente: ");
                let emailCli = prompt("Digite o email do cliente: ");
                let cpfCli = parseInt(prompt("Digite o CPF do cliente: "));
                let telCli = parseInt(prompt("Digite o telefone do cliente: "));
                const insertCli = await insert.inserirCliente({ nome:nomeCli, email:emailCli, cpf:cpfCli, telefone:telCli });

                console.log(`Cliente ${nomeCli} Inserido com Sucesso`);
                break;

            case 2:
                console.log(`Início do cadastro do Produto.`);

                let prodNome = prompt("Digite o nome do produto: ");
                let prodDesc = prompt("Digite a descrição do produto: ");
                let prodValor = parseInt(prompt("Digite a descrição do produto: "));
                const insertProd = await insert.inserirProdutos({ nome_prod:prodNome, descricao:prodDesc, valor_prod:prodValor });

                console.log('Produto Inserido com Sucesso');
                break;

            case 3:
                console.log('Inserido Produtos');
                const insertPed = await insert.inserirPedido({ cli_id:7, prod_id:5});
                console.log('Produto Inserido com Sucesso');
                break;

            case 4:
                const listClli = await select.selecionarCli();
                console.log(listClli)
                break;

            case 5:
                const listProd = await select.selecionarProd();
                console.log(listProd);
                break;

            case 6:
                const listPed = await select.selecionarPedidos();
                console.log(listPed);
                break;

            case 7:
                console.log(`Atualizar dados do cliente.`);
                let updateCliID = prompt("Digite o Id do cliente: ");
                let updateCliNome = prompt("Digite o nome do cliente: ");
                let updateCliEmail = prompt("Digite o email do cliente: ");
                let updateCliCpf = prompt("Digite o CPF do cliente: ");
                let updateCliTel = prompt("Digite o ID do cliente: ");
                const updateCli = await update.updateCli( updateCliID, { nome:updateCliNome, email:updateCliEmail, cpf:updateCliCpf, telefone:updateCliTel })
                console.log('Dados do Cliente Atualizados com sucesso');
                break;

            case 8:
                console.log('Atualizar dados do produto.')
                let updateProdNome = prompt("Digite o nome do produto: ");
                let updateProdDesc = prompt("Digite a descrição do produto: ");
                let updateProdValor = parseInt(prompt("Digite o valor do produto: "));
                let updateProdID = prompt("Digite o ID do produto: ");
                const updateProd = await update.updateProd( updateProdID, {  nome_prod:updateProdNome, descricao:updateProdDesc, valor_prod: updateProdValor })
                console.log('Dados do Produto do Cliente Atualizados com sucesso');
                break;

            case 9:
                console.log('Atualizar Pedido.')
                const updatePed = await update.updatePed( 17, { prod_id:'1' })
                console.log('Dados do Pedido Cliente Atualizados com sucesso');
                break;

            case 10:
                console.log('Remover cliente do banco de dados.')
                let delCliID = parseInt(prompt("Digite o ID do cliente: "))
                const deleteCli = await del.deleteCli(delCliID)
                console.log('Cliente Removido');
                break;

            case 11:
                console.log('Remover produto do banco de dados.')
                let delProdID = parseInt(prompt("Digite o ID do produto: "))
                const deleteProd = await del.deleteProd(delProdID)
                console.log('Produto Deletado');
                break;

            case 12:
                console.log('Remover pedido do banco de dados.')
                let delPedID = parseInt(prompt("Digite o ID do pedido: "))
                const deletePed = await del.deletePed(delPedID)
                console.log('Pedido Deletado');
                break;

            default:
                console.log(`Operação não entendida.`)
        }

})()