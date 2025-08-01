export class classe_servicos_agendados {

    data
    hora 

    barba
    sobrancelha
    cabelo

    email_cliente
    nome_funcionario

    //esse identificador é temporal, para fins de comparação entre datas na listagem de agendamentos. É um número inteiro. Quanto mais à frente a data, maior é o número. O valor tem como dois últimos dígitos o horario agendado
    id

    constructor (data, hora, barba, sobrancelha, cabelo, email_cliente, nome_funcionario, id_temporal){

        this.data = data
        this.hora = hora
        this.barba = barba
        this.sobrancelha = sobrancelha
        this.cabelo = cabelo
        this.email_cliente = email_cliente
        this.nome_funcionario = nome_funcionario
        this.id = id_temporal

    }
}