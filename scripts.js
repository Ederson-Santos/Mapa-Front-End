// Aguarda o carregamento total do DOM
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os links do menu de navegação
  const links = document.querySelectorAll("nav a");

  // Para cada link do menu
  links.forEach(link => {
    link.addEventListener("click", () => {
      // Remove destaque anterior, se houver
      document.querySelectorAll(".destaque").forEach(el => {
        el.classList.remove("destaque");
      });

      // Extrai o destino a partir do href (remove o "#")
      const destino = link.getAttribute("href").substring(1);

      // Seleciona o elemento correspondente (ex: #texto-sobre, #texto-projetos, etc.)
      const alvo = document.querySelector(`#texto-${destino}`);

      // Se o elemento existir, aplica o destaque temporário
      if (alvo) {
        alvo.classList.add("destaque");

        // Remove o destaque após 2 segundos
        setTimeout(() => {
          alvo.classList.remove("destaque");
        }, 2000);
      }
    });
  });
});


