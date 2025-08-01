document.addEventListener("DOMContentLoaded", () => {
    const botaoEnviar = document.getElementById("btn-enviar-opiniao");
    const formulario = document.getElementById("formulario-satisfacao");
    const selectFuncionario = document.getElementById("funcionarios");

    botaoEnviar.addEventListener("click", () => {
        
        const funcionario = selectFuncionario.value;
        const pontualidade = formulario.querySelector('input[name="pontualidade"]:checked')?.value;
        const educacao = formulario.querySelector('input[name="educacao"]:checked')?.value;
        const qualidadeCorte = formulario.querySelector('input[name="qualidade-do-corte"]:checked')?.value;
        const opiniao = formulario.querySelector('textarea[name="opiniao"]').value;

        if (!funcionario) {
            alert("Por favor, selecione um funcionário para avaliar.");
            return;
        }

        if (!opiniao.trim()) {
            alert("Por favor, escreva sua opinião.");
            return;
        }

        const avaliacao = {
            
            funcionario,
            pontualidade,
            educacao,
            qualidadeCorte,
            opiniao
    
        };

        const avaliacoes = JSON.parse(localStorage.getItem("avaliações")) || [];
        avaliacoes.push(avaliacao);
        localStorage.setItem("avaliações", JSON.stringify(avaliacoes));

        alert("Obrigado pela sua opinião! Agora você será redirecionado para a página inicial.");
        formulario.reset();

        window.location.href = "../index.html"
    });
});
