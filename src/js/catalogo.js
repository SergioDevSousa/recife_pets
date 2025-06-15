function carregarProdutos(categoriaAtual) {
  const catalogo = document.getElementById("catalogo");

  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === categoriaAtual
  );

  produtosFiltrados.forEach((produto) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" />
      <h2>${produto.nome}</h2>
      <p>${produto.descricao}</p>
      <p>Código: ${produto.codigo}</p>
      <p>R$ ${produto.preco.toFixed(2)}</p>
    `;

    catalogo.appendChild(card);
  });
}
