// cadastro.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cadastros = [];

function exibirMenu() {
    console.log("\n--- MENU ---");
    console.log("1. Adicionar novo cadastro");
    console.log("2. Listar cadastros");
    console.log("3. Sair");

    rl.question("Escolha uma opção: ", resposta => {
        switch (resposta) {
            case "1":
                adicionarCadastro();
                break;
            case "2":
                listarCadastros();
                exibirMenu();
                break;
            case "3":
                console.log("Encerrando...");
                rl.close();
                break;
            default:
                console.log("Opção inválida.");
                exibirMenu();
        }
    });
}

function adicionarCadastro() {
    rl.question("Digite o nome: ", nome => {
        rl.question("Digite a idade: ", idade => {
            cadastros.push({ nome, idade: parseInt(idade) });
            console.log("Cadastro adicionado com sucesso!");
            exibirMenu();
        });
    });
}

function listarCadastros() {
    console.log("\n--- LISTA DE CADASTROS ---");
    if (cadastros.length === 0) {
        console.log("Nenhum cadastro encontrado.");
    } else {
        cadastros.forEach((c, i) =>
            console.log(`${i + 1}. ${c.nome}, ${c.idade} anos`)
        );
    }
}

exibirMenu();
