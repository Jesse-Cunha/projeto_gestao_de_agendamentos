import { classe_cliente } from "./classe-cliente.js"
import { troca_email } from "./funcao-troca-email.js"

export function editar_informacoes(email_cliente, novo_nome, novo_sobrenome, novo_telefone, novo_email, novo_usuario){

    let i 

    for(i=0; i < classe_cliente.vetor_clientes.length; i++) {

        if(email_cliente === classe_cliente.vetor_clientes[i].email) {

            classe_cliente.vetor_clientes[i].nome = novo_nome
            classe_cliente.vetor_clientes[i].sobrenome = novo_sobrenome
            classe_cliente.vetor_clientes[i].telefone = novo_telefone
            classe_cliente.vetor_clientes[i].email = novo_email
            classe_cliente.vetor_clientes[i].usuario = novo_usuario

            const cliente_editado = classe_cliente.vetor_clientes[i]

            localStorage.setItem("lista de clientes", JSON.stringify(classe_cliente.vetor_clientes))
            localStorage.setItem("cliente logado", JSON.stringify(classe_cliente.vetor_clientes[i].email))

            troca_email(email_cliente, novo_email)
            
            confirm(`${cliente_editado.nome}, seus dados foram editados! Agora você será redirecionado para a página inicial.`)

            window.location.href = "../index.html"

            return  
        }

    }

}

