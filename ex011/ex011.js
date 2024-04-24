document.addEventListener("DOMContentLoaded", function() {
    const mainItems = document.querySelectorAll('.main-item');

    // Adiciona um evento de clique a todos os itens principais
    mainItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const subMenu = this.querySelector('.sub-menu');
            
            // Alternar classe 'expanded' para realçar o item principal clicado
            this.classList.toggle('expanded');

            // Alternar classe 'visible' para mostrar ou ocultar a subseção correspondente
            if (subMenu) {
                subMenu.classList.toggle('visible');
            }
        });
    });
});
