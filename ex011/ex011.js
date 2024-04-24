document.addEventListener("DOMContentLoaded", function() {
    const mainItems = document.querySelectorAll('.main-item');

    // adiciona um evento de clique a todos os itens principais
    mainItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const subMenu = this.querySelector('.sub-menu');

            // alternar classe 'visible' para mostrar ou ocultar o submenu correspondente
            if (subMenu) {
                subMenu.classList.toggle('visible');
            }
        });
    });
});
