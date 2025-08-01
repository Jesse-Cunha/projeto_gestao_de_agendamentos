import { editar_senha } from "./funcao-editar-senha.js"


const botao_editar_senha = document.getElementById("botao-editar-senha")
const email_cliente = JSON.parse(localStorage.getItem("cliente logado")) || ""

botao_editar_senha.addEventListener("click", function(evento) { 

    evento.preventDefault()

    const senha_editada = document.getElementById("senha").value
    const repita_senha_editada = document.getElementById("repita-senha").value
    
    if(email_cliente === "") {

        alert("Não identificamos nenhum cliente logado! Você será redirecionado para a página de login.")

        window.location.href = "/src/tela-login.html"

        return

    } else {

        if(senha_editada === "" || repita_senha_editada === ""){
            
            alert("Preencha todos os campos!")

            return

        } else {

            if(senha_editada === repita_senha_editada){
            
            editar_senha(email_cliente, senha_editada)

            } else {

                alert("As duas senhas digitadas não estão iguais. Repita o procedimento.")

                return
            }
        }
    }
})