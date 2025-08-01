export function troca_email(email_cliente, email_editado) {

    if (email_cliente === email_editado) {

        return
        
    } else {

        const vetor_todos_servicos = JSON.parse(localStorage.getItem("todos os serviços agendados")) || []
        const vetor_meus_servicos = JSON.parse(localStorage.getItem("meus serviços")) || []

        let i

        for (i = 0; i < vetor_todos_servicos.length; i++) {

            if (vetor_todos_servicos[i].email_cliente === email_cliente) {

                vetor_todos_servicos[i].email_cliente = email_editado
            }
        }

        let j

        for (j = 0; j < vetor_meus_servicos.length; j++) {

            vetor_meus_servicos[j].email_cliente = email_editado
        }

        localStorage.setItem("todos os serviços agendados", JSON.stringify(vetor_todos_servicos))
        localStorage.setItem("meus serviços", JSON.stringify(vetor_meus_servicos))

    }

}