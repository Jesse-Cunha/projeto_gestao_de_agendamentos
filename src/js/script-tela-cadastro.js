import { classe_cliente } from "./classe-cliente.js";
import { cadastrar_cliente } from "./funcao-cadastrar.js";

const botao_cadastrar = document.getElementById("botao-cadastrar")

botao_cadastrar.addEventListener("click", function(evento) {
    
    evento.preventDefault()
    
    const id_cliente = classe_cliente.numero_de_clientes + 1
    const nome_cliente = document.getElementById("nome").value
    const sobrenome_cliente = document.getElementById("sobrenome").value
    const telefone_cliente = document.getElementById("telefone").value
    const email_cliente = document.getElementById("email").value
    const usuario_cliente = document.getElementById("usuario").value
    const senha_cliente = document.getElementById("senha").value
    const repita_senha_cliente = document.getElementById("repita-senha").value

    if(nome_cliente === "" || sobrenome_cliente === "" || telefone_cliente === "" || email_cliente === "" || usuario_cliente === "" || senha_cliente === "" || repita_senha_cliente ==="" ){

        alert("Preencha todos os campos!")

        return
        
    }   

    cadastrar_cliente(id_cliente, nome_cliente, sobrenome_cliente, telefone_cliente, email_cliente, usuario_cliente, senha_cliente, repita_senha_cliente)

})