import { login_cliente } from "./funcao-login.js"

const botao_login = document.getElementById("botao-login")

botao_login.addEventListener("click", function (evento) {

    evento.preventDefault()

    const email_cliente = document.getElementById("email").value
    const senha_cliente = document.getElementById("senha").value

    login_cliente(email_cliente, senha_cliente)

})