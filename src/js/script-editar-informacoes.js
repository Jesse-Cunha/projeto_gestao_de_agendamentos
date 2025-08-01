import { editar_informacoes } from "./funcao-editar-informacoes.js"

const botao_editar_info = document.getElementById("botao-editar-info")
const email_cliente = JSON.parse(localStorage.getItem("cliente logado")) || ""

botao_editar_info.addEventListener("click", function(evento) {
    
    evento.preventDefault()

    const nome_editado = document.getElementById("nome").value
    const sobrenome_editado = document.getElementById("sobrenome").value
    const telefone_editado = document.getElementById("telefone").value
    const email_editado = document.getElementById("email").value
    const usuario_editado = document.getElementById("usuario").value
    
    if(email_cliente === "") {

        alert("Não identificamos nenhum cliente logado! Você será redirecionado para a página de login.")

        window.location.href = "/src/tela-login.html"

        return
    } else {
        
        if(nome_editado === "" || sobrenome_editado === "" ||telefone_editado === "" || email_editado === "" || usuario_editado === "" ){

            alert("Preencha todos os campos!")

            return
        
        } else {

            editar_informacoes(email_cliente, nome_editado, sobrenome_editado, telefone_editado, email_editado, usuario_editado)
        }
    }    
})
