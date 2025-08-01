import { classe_funcionario } from "./classe-funcionario.js"


export function verifica_disponibilidade(funcionario, dia, hora) {

    console.log("Entrou na verificação de disponibilidade")
   
    let i

    for (i = 0; i < classe_funcionario.servicos_agendados.length; i++) {
    
        if (classe_funcionario.servicos_agendados[i].nome_funcionario === funcionario && classe_funcionario.servicos_agendados[i].data === dia && classe_funcionario.servicos_agendados[i].hora === hora) {

            console.log("Bateram todos os dados")

            console.log("Dados encontrados no vetor:")
            console.log(classe_funcionario.servicos_agendados[i].nome_funcionario)
            console.log(classe_funcionario.servicos_agendados[i].data)
            console.log(classe_funcionario.servicos_agendados[i].hora)

            console.log("Dados captados no formulário:")

            console.log(funcionario)
            console.log(dia)
            console.log(hora)
            console.log(`Iteração ${i}`)
            return false
        } 
    }

    console.log("O horário está disponível")
    return true

}