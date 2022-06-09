(async () => {

    const insert = require('./controller/inserts');
    const select = require('./controller/selects');
    const update = require('./controller/updates');
    const del = require('./controller/deletes');
    const prompt = require('prompt-sync')();

    console.log('\n Aplicação rodando \n');

    console.log(`Funcionalidades do sistema \n`)

    const clientes = await select.selecionarCli() 
    const produtos = await select.selecionarProd()
    const pedidos = await select.selecionarPedidos()
    console.log(clientes.length)

    console.log(`1 - Cadastrar cliente.`);
    console.log(`2 - Cadastrar produto.`);
    console.log(`3 - Cadastrar pedido.`);
    if(clientes.length) console.log(`4 - Listar clientes.`);
    if(produtos.length) console.log(`5 - Listar produtos.`);
    if(clientes.length && produtos.length)console.log(`6 - Listar pedidos.`);
    if(clientes.length) console.log(`7 - Atualizar cliente.`);
    if(produtos.length)console.log(`8 - Atualizar produto.`);
    if(clientes.length && produtos.length && pedidos.length)console.log(`9 - Atualizar pedido.`);
    if(clientes.length) console.log(`10 - Remover cliente.`);
    if(produtos.length)console.log(`11 - Remover produto.`);
    if(clientes.length && produtos.length && pedidos.length)console.log(`12 - Remover pedido.`);

    let option = parseInt(prompt(`Por favor, escolha uma das opções acima: `));

        switch(option){
            case 1:
                console.log(`\n Início do cadastro do cliente.\n`);

                let nomeCli = prompt("Digite o nome do cliente: ");
                let emailCli = prompt("Digite o email do cliente: ");
                let cpfCli = parseInt(prompt("Digite o CPF do cliente: "));
                let telCli = parseInt(prompt("Digite o telefone do cliente: "));
                const insertCli = await insert.inserirCliente(
                    { 
                        nome:nomeCli,
                        email:emailCli,
                        cpf:cpfCli,
                        telefone:telCli
                    });

                console.log(`Cliente ${nomeCli} Inserido com Sucesso`);
                break;

            case 2:
                console.log(`\n Início do cadastro do Produto. \n`);

                let prodNome = prompt("Digite o nome do produto: ");
                let prodDesc = prompt("Digite a descrição do produto: ");
                let prodValor = parseInt(prompt("Digite o valor do produto: "));
                const insertProd = await insert.inserirProdutos(
                    {
                    nome_prod:prodNome,
                    descricao:prodDesc,
                    valor_prod:prodValor 
                    }
                );

                console.log(`Produto ${prodNome} Inserido com Sucesso.`);
                break;

            case 3:
                console.log(`\n Início do cadastro do Pedido. \n`);

                const cli_id = prompt('Digite o ID do cliente: ');
                const prod_Id = prompt('Digite o ID do produto: ');
                const insertPed = await insert.inserirPedido(
                    {
                        cli_id:cli_id, 
                        prod_id:prod_Id 
                    }
                );
                console.log(`Pedido cadastrado com Sucesso.`);
                break;

            case 4:
                console.log(`\n Listagem de clientes. \n`);

                const listClli = await select.selecionarCli();
                console.log(listClli)
                break;

            case 5:
                console.log(`\n Listagem de produtos. \n`);

                const listProd = await select.selecionarProd();
                console.log(listProd);
                break;

            case 6:
                console.log(`\n Listagem de pedidos. \n`);

                const listPed = await select.selecionarPedidos();
                console.log(listPed);
                break;

            case 7:
                console.log(`\n Atualizar dados do cliente. \n`);

                let updateCliID = prompt("Digite o Id do cliente: ");
                let updateCliNome = prompt("Digite o nome do cliente: ");
                let updateCliEmail = prompt("Digite o email do cliente: ");
                let updateCliCpf = prompt("Digite o CPF do cliente: ");
                let updateCliTel = prompt("Digite o ID do cliente: ");
                const updateCli = await update.updateCli( updateCliID, 
                    {
                        nome:updateCliNome,
                        email:updateCliEmail,
                        cpf:updateCliCpf,
                        telefone:updateCliTel 
                    }
                )
                console.log('Dados do Cliente Atualizados com sucesso');
                break;

            case 8:
                console.log('\n Atualizar dados do produto. \n')
                let updateProdNome = prompt("Digite o nome do produto: ");
                let updateProdDesc = prompt("Digite a descrição do produto: ");
                let updateProdValor = parseInt(prompt("Digite o valor do produto: "));
                let updateProdID = prompt("Digite o ID do produto: ");
                const updateProd = await update.updateProd( updateProdID, 
                    {  
                        nome_prod:updateProdNome, 
                        descricao:updateProdDesc, 
                        valor_prod: updateProdValor 
                    }
                )
                console.log('Dados do Produto do Cliente Atualizados com sucesso');
                break;

            case 9:
                console.log('\n Atualizar Pedido. \n');
                const ped_id = prompt('Digite o Id do pedido que deseja atualizar: ')
                const prod_id = prompt('Digite o Id do produto que deseja: ')
                const updatePed = await update.updatePed( ped_id, { prod_id:prod_id });
                console.log('Dados do Pedido Atualizados com sucesso');
                break;

            case 10:
                console.log('\n Remover cliente do banco de dados. \n')
                let delCliID = parseInt(prompt("Digite o ID do cliente: "))
                const deleteCli = await del.deleteCli(delCliID)
                console.log('Cliente removido com sucesso.');
                break;

            case 11:
                console.log('\n Remover produto do banco de dados. \n')
                let delProdID = parseInt(prompt("Digite o ID do produto: "))
                const deleteProd = await del.deleteProd(delProdID)
                console.log('Produto removido com sucesso.');
                break;

            case 12:
                console.log('\n Remover pedido do banco de dados. \n')
                let delPedID = parseInt(prompt("Digite o ID do pedido: "))
                const deletePed = await del.deletePed(delPedID)
                console.log('Pedido removido com sucesso.');
                break;

            default:
                console.log(`Operação não entendida.`)
                break;
        }

})()