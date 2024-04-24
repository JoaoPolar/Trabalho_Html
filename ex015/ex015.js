// função para atualizar a contagem regressiva
function atualizacontagemregressiva() {
    const fim = new Date("2024-04-25T00:00:00").getTime();
    const agora = new Date().getTime();
    const temporestante = fim - agora;

    const days = Math.floor(temporestante / (1000 * 60 * 60 * 24));
    const hours = Math.floor((temporestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((temporestante % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((temporestante % (1000 * 60)) / 1000);

    document.getElementById("contagemregressiva").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (temporestante <= 0) {
        clearInterval(timer);
        document.getElementById("contagemregressiva").innerHTML = "Lançado!";
    }
}

// atualiza a contagem regressiva a cada segundo
const timer = setInterval(atualizacontagemregressiva, 1000);

// garante que a contagem regressiva seja exibida
atualizacontagemregressiva();

//envio do formulário de pré-venda para retornar uma mensagem de sucesso
document.getElementById("preOrdemForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; // Exibe a mensagem de sucesso
    successMessage.textContent = "Pedido de pré-venda realizado com sucesso!";
    setTimeout(function() {
        successMessage.style.display = "none"; // Oculta a mensagem depois de um tempo
    }, 50000);
});
