document.addEventListener("DOMContentLoaded", function () {
  // Controle de quantidade nos cards
  const cards = document.querySelectorAll(".card-item");

  cards.forEach(card => {
    const btnMais = card.querySelector(".btn-mais");
    const btnMenos = card.querySelector(".btn-menos");
    const contador = card.querySelector(".btn-add-numero-itens");

    let quantidade = 0;

    btnMais.addEventListener("click", () => {
      quantidade++;
      contador.textContent = quantidade;
    });

    btnMenos.addEventListener("click", () => {
      if (quantidade > 0) {
        quantidade--;
        contador.textContent = quantidade;
      }
    });
  });

  // Troca de depoimentos com destaque no botão ativo
  const botoes = document.querySelectorAll(".botao-depoimento");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const numero = botao.dataset.numero;

      mostrarDepoimento(numero);

      // Atualiza botão ativo
      botoes.forEach(b => b.classList.remove("ativo"));
      botao.classList.add("ativo");
    });
  });
});

// Função para mostrar depoimento específico
function mostrarDepoimento(numero) {
  const todos = document.querySelectorAll(".depoimento");
  todos.forEach(el => el.classList.remove("ativo"));

  const selecionado = document.getElementById(`depoimento-${numero}`);
  if (selecionado) {
    selecionado.classList.add("ativo");
  }
}
