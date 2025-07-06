const links = document.querySelectorAll("nav a");   

links.forEach(link => {
  link.addEventListener("click", () => {
    // Remove destaque anterior
    document.querySelectorAll(".destaque").forEach(el => {
      el.classList.remove("destaque");
    });

    // Obtém o destino a partir do href do link (ex: "sobre", "projetos", etc.)
    const destino = link.getAttribute("href").substring(1);

    // Busca um elemento com ID correspondente (ex: "texto-sobre")
    const alvo = document.querySelector(`#texto-${destino}`);

    if (alvo) {
      alvo.classList.add("destaque");

      setTimeout(() => {
        alvo.classList.remove("destaque");
      }, 2000);
    }
  });
});

