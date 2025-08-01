import { classe_servicos_agendados } from "./classe-servicos-agendados.js"

export class classe_cliente {

    static vetor_clientes = JSON.parse(localStorage.getItem("lista de clientes")) || []
    static numero_de_clientes = classe_cliente.vetor_clientes.length
    static servicos_agendados = JSON.parse(localStorage.getItem("todos os serviços agendados")) || []

    //recebe o email do cliente logado no ato de login
    static cliente_logado

    id
    nome 
    sobrenome
    telefone
    email
    usuario
    senha
    
    constructor (id, nome, sobrenome, telefone, email, usuario, senha) {

        this.id = id
        this.nome = nome
        this.sobrenome = sobrenome
        this.telefone = telefone
        this.email = email
        this.usuario = usuario
        this.senha = senha

        classe_cliente.numero_de_clientes ++

    }
}