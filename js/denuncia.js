document.getElementById("form-dados").addEventListener("submit", function(event) {
    console.log("Formulário enviado!"); // Verifica se o evento está sendo capturado corretamente
    event.preventDefault();  // Evita o comportamento padrão de envio do formulário
    window.location.href = "../html/confirma-denuncia.html";  // Redireciona para a página de confirmação
});
