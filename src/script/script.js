const produtos = [
  {
    nome: "Alicate de Cutícula Mundial",
    descricao: "Cabo anatômico e mola resistente, ideal para cutículas",
    codigo: "777",
    imagem: "/src/images/1.png",
    preco: 35.00,
    categoria: "medicamento"
  },
  {
    nome: "Alicate de Cutícula Mundial",
    descricao: "Cabo anatômico e mola resistente, ideal para cutículas",
    codigo: "021",
    imagem: "/src/images/20.png",
    preco: 35.00,
    categoria: "acessorio"
  }
];

const categoriaAtual = "medicamento";

const catalogo = document.getElementById("catalogo");

produtos
  .filter(produto => produto.categoria === categoriaAtual)
  .forEach(produto => {
    const card = document.createElement("div");
    card.className = "card";

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" />
    <h2>${produto.nome}</h2>
    <p>Descrição: ${produto.descricao}</p>
    <p>Código: ${produto.codigo}</p>
    <p>R$ ${produto.preco.toFixed(2)}</p>
  `;

  catalogo.appendChild(card);
});
