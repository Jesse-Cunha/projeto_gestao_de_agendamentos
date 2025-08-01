import { classe_cliente } from "./classe-cliente.js"
import { classe_funcionario } from "./classe-funcionario.js"
import { classe_servicos_agendados } from "./classe-servicos-agendados.js"
import { listar_cortes } from "./funcao-listar-cortes.js"
import { verifica_disponibilidade } from "./funcao-verifica-disponibilidade.js"

export function agendar(email_cliente, nome_funcionario, dia, hora, cabelo, sobrancelha, barba, id_temporal) {

    if (verifica_disponibilidade(nome_funcionario, dia, hora)) {

        let agendamento = new classe_servicos_agendados(dia, hora, barba, sobrancelha, cabelo, email_cliente, nome_funcionario, id_temporal)

        let i

        for (i = 0; i < classe_cliente.vetor_clientes.length; i++) {

            if (email_cliente === classe_cliente.vetor_clientes[i].email) {

                const cliente = classe_cliente.vetor_clientes[i]

                classe_cliente.servicos_agendados.push(agendamento)
                classe_funcionario.servicos_agendados.push(agendamento)

                confirm(`Serviço agendado com sucesso, ${cliente.nome}! Aguardamos você no dia ${dia}, às ${hora}! Nosso ${nome_funcionario} irá te atender. Agora, você será redirecionado para a página inicial.`)

                localStorage.setItem("todos os serviços agendados", JSON.stringify(classe_cliente.servicos_agendados))

                listar_cortes(email_cliente)

                window.location.href = "../index.html"

                return
            }
        }
    } else {

        alert("Esse horário está indisponível para esse funcionário. Por favor, escolha outro horário ou outro funcionário.")

        return
    }
}
