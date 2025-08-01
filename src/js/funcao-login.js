import { classe_cliente } from "./classe-cliente.js"
import { listar_cortes } from "./funcao-listar-cortes.js"

export function login_cliente(email, senha) {

    if(email === "" || senha ===""){

        alert("Preencha todos os campos!")

        return

    } else {
    
        let i

        for (i = 0; i < classe_cliente.numero_de_clientes; i++) {

             if (email === classe_cliente.vetor_clientes[i].email) {

                if (senha === classe_cliente.vetor_clientes[i].senha) {

                    classe_cliente.cliente_logado = classe_cliente.vetor_clientes[i]

                    const email = classe_cliente.cliente_logado.email

                    localStorage.setItem("cliente logado", JSON.stringify(email))

                    confirm(`Bem vindo, ${classe_cliente.vetor_clientes[i].nome}!`)

                    console.log(classe_cliente.cliente_logado)
                    listar_cortes(email)

                    window.location.href = "/src/agendamento.html"
                
                    return
        
                } else {

                    alert("Encontramos seu e-mail, mas sua senha está incorreta! Repita o procedimento.")

                    return
                }

            }   
        }  
    
        alert("Desculpe, não encontramos seu e-mail na nossa base de dados. Repita o procedimento.")
    } 
}

      


