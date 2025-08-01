window.onload = function () {

    const lista_de_cortes = document.getElementById("lista")

    const meus_agendamentos = JSON.parse(localStorage.getItem("meus serviços")) || []

    meus_agendamentos.sort((a, b) => a.id - b.id)
    console.log(meus_agendamentos)

    if (meus_agendamentos.length === 0) {

        const div_item_da_lista = document.createElement("div")

        div_item_da_lista.classList.add("container-item")

        lista_de_cortes.appendChild(div_item_da_lista)

        const item_da_lista = document.createElement("li")

        item_da_lista.classList.add("item-da-lista")

        div_item_da_lista.appendChild(item_da_lista)

        const mensagem_lista_vazia = document.createElement("p")
        mensagem_lista_vazia.classList.add("mensagem-lista-vazia")
        item_da_lista.appendChild(mensagem_lista_vazia)
        mensagem_lista_vazia.innerText = "Não há agendamentos a serem exibidos no momento."

    } else {

        let i

        for (i = 0; i < meus_agendamentos.length; i++) {

            const div_item_da_lista = document.createElement("div")

            div_item_da_lista.classList.add("container-item")

            lista_de_cortes.appendChild(div_item_da_lista)

            const item_da_lista = document.createElement("li")

            item_da_lista.classList.add("item-da-lista")

            div_item_da_lista.appendChild(item_da_lista)

            //label da data
            const label_data = document.createElement("p")
            label_data.classList.add("label")
            item_da_lista.appendChild(label_data)
            label_data.innerText = "Data: "

            //data em si
            const valor_data = meus_agendamentos[i].data
            const data = document.createElement("p")
            data.classList.add("dado")
            item_da_lista.appendChild(data)
            data.innerText = valor_data

            //label-horário
            const label_horario = document.createElement("p")
            label_horario.classList.add("label")
            item_da_lista.appendChild(label_horario)
            label_horario.innerText = "Horário: "

            //horário em si
            const valor_horario = meus_agendamentos[i].hora
            const horario = document.createElement("p")
            horario.classList.add("dado")
            item_da_lista.appendChild(horario)
            horario.innerText = valor_horario

            //label-funcionario
            const label_funcionario = document.createElement("p")
            label_funcionario.classList.add("label")
            item_da_lista.appendChild(label_funcionario)
            label_funcionario.innerText = "Funcionário: "

            //funcionário em si
            const valor_funcionario = meus_agendamentos[i].nome_funcionario
            const funcionario = document.createElement("p")
            funcionario.classList.add("dado")
            item_da_lista.appendChild(funcionario)
            funcionario.innerText = valor_funcionario

            //cabelo
            const valor_cabelo = meus_agendamentos[i].cabelo
            const cabelo = document.createElement("p")
            cabelo.classList.add("label-dado")
            item_da_lista.appendChild(cabelo)

            if (valor_cabelo) {

                cabelo.innerText = "Cabelo: sim"

            } else {

                cabelo.innerText = "Cabelo: não"
            }

            //sobrancelha
            const valor_sobrancelha = meus_agendamentos[i].sobrancelha
            const sobrancelha = document.createElement("p")
            sobrancelha.classList.add("label-dado")
            item_da_lista.appendChild(sobrancelha)

            if (valor_sobrancelha) {

                sobrancelha.innerText = "Sobrancelha: sim"
            } else {

                sobrancelha.innerText = "Sobrancelha: não"
            }

            //barba
            const valor_barba = meus_agendamentos[i].barba
            const barba = document.createElement("p")
            barba.classList.add("label-dado")
            item_da_lista.appendChild(barba)

            if (valor_barba) {

                barba.innerText = "Barba: sim"
            } else {

                barba.innerText = "Barba: não"
            }

            //status
            const status = document.createElement("p")
            status.classList.add("label-dado")
            item_da_lista.appendChild(status)

            let data_atual = new Date().toLocaleDateString("en-ca")
            console.log(data_atual)
            let hora_atual = new Date().toLocaleTimeString("pt-br", { hour: "numeric" })
            let hora_atual_inteira = parseInt(hora_atual)
            console.log(hora_atual_inteira)
            

            let id_data_hora_atual = Date.parse(data_atual) + hora_atual_inteira
            console.log(id_data_hora_atual)
            console.log(meus_agendamentos[i].id)

            if (meus_agendamentos[i].id < id_data_hora_atual) {

                console.log("O momento do corte agendado já passou")
                status.innerText = "Status: realizado"

            } else {

                if(meus_agendamentos[i].id > id_data_hora_atual){

                console.log("O momento do agendamento ainda não chegou")

                status.innerText = "Status: a ser realizado"
                } else {

                    status.innerText = "Status: sendo realizado nesse momento"
                }
            }
        }
    }
}



