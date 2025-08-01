import { classe_cliente } from "./classe-cliente.js"

export function editar_senha(email_cliente, nova_senha){

    let i

    for (i=0; i < classe_cliente.vetor_clientes.length; i++) {
        
        if(email_cliente === classe_cliente.vetor_clientes[i].email) {

            classe_cliente.vetor_clientes[i].senha = nova_senha

            const cliente_logado = classe_cliente.vetor_clientes[i]

            localStorage.setItem("lista de clientes", JSON.stringify(classe_cliente.vetor_clientes))

            confirm(`${cliente_logado.nome}, sua senha foi modificada com sucesso! Agora você será redirecionado para a página inicial.`)

            window.location.href = "../index.html"

            return
        }
    }
}

