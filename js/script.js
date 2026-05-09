const animes = [
  {
    nome: "Attack on Titan",
    genero: "Ação / Drama",
    nota: 9.5,
    censura: 16,
    episodios: 98,
    linkImagem: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    resumo: "Em um mundo cercado por muralhas, a humanidade luta pela sobrevivência contra titãs gigantes que devoram pessoas sem motivo aparente.",
    curiosidade: "O autor Hajime Isayama se inspirou em uma experiência ruim em um cybercafé para criar os titãs."
  },
  {
    nome: "One Piece",
    genero: "Aventura / Fantasia",
    nota: 9.6,
    censura: 12,
    episodios: 1100,
    linkImagem: "https://image.tmdb.org/t/p/w500/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
    resumo: "Monkey D. Luffy parte em uma jornada épica para encontrar o tesouro lendário 'One Piece' e se tornar o Rei dos Piratas.",
    curiosidade: "É o mangá mais vendido da história, com mais de 516 milhões de cópias no mundo todo."
  },
  {
    nome: "Demon Slayer",
    genero: "Ação / Sobrenatural",
    nota: 8.9,
    censura: 14,
    episodios: 55,
    linkImagem: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    resumo: "Tanjiro Kamado se torna um caçador de demônios após sua família ser massacrada e sua irmã transformada em demônio.",
    curiosidade: "O filme 'Mugen Train' se tornou o anime de maior bilheteria mundial em 2020."
  },
  {
    nome: "Jujutsu Kaisen",
    genero: "Ação / Sobrenatural",
    nota: 8.7,
    censura: 16,
    episodios: 47,
    linkImagem: "https://image.tmdb.org/t/p/w500/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg",
    resumo: "Yuji Itadori engole um dedo de uma maldição maligna e entra no mundo dos feiticeiros jujutsu para combater espíritos amaldiçoados.",
    curiosidade: "O personagem Gojo Satoru é considerado um dos personagens mais populares do anime moderno."
  },
  {
    nome: "Naruto Shippuden",
    genero: "Ação / Aventura",
    nota: 9.1,
    censura: 12,
    episodios: 500,
    linkImagem: "https://image.tmdb.org/t/p/w500/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg",
    resumo: "Naruto Uzumaki retorna à Vila da Folha mais forte e enfrenta a organização Akatsuki em busca de seu sonho de se tornar Hokage.",
    curiosidade: "Masashi Kishimoto pensou em desistir da carreira de mangaká antes de criar Naruto."
  },
  {
    nome: "Death Note",
    genero: "Suspense / Psicológico",
    nota: 9.0,
    censura: 14,
    episodios: 37,
    linkImagem: "https://image.tmdb.org/t/p/w500/g8hHbsRADVS6r4nOaT9ZD9wsbx5.jpg",
    resumo: "Light Yagami encontra um caderno sobrenatural que mata qualquer pessoa cujo nome seja escrito nele e decide criar um 'novo mundo'.",
    curiosidade: "O anime foi banido em vários países e escolas por incentivar comportamentos imitativos."
  },
  {
    nome: "Cowboy Bebop (Trailer)",
    genero: "Ação / Sci-Fi",
    nota: 8.9,
    censura: 16,
    episodios: 26,
    linkImagem: "https://www.youtube.com/embed/QSBp7B3-z4Q",
    resumo: "Em 2071, um grupo de caçadores de recompensas viaja pelo sistema solar a bordo da nave Bebop perseguindo criminosos.",
    curiosidade: "A trilha sonora de jazz composta por Yoko Kanno é considerada uma das melhores da história dos animes."
  }
];

let idadeUsuario = 0;
let totalPremium = 0;

// Referências do DOM
const catalogo = document.getElementById("catalogo");
const inputIdade = document.getElementById("idade");
const btnFiltrar = document.getElementById("btnFiltrar");
const contador = document.getElementById("contador");

// Verifica se o link é um vídeo do YouTube
function ehVideo(link) {
  return link.includes("youtube.com/embed");
}

// Operador ternário: define a cor do card pela nota
function corDaNota(nota) {
  return nota >= 9
    ? "background:#4caf50;color:#fff"            // verde - excelente
    : nota >= 8
    ? "background:#ff9800;color:#fff"            // laranja - bom
    : "background:#f44336;color:#fff";           // vermelho - regular
}

// Operador ternário: mensagem de classificação
function classificacao(nota) {
  return nota >= 9 ? "🏆 Obra-prima" : nota >= 8 ? "👍 Recomendado" : "🤔 Mediano";
}

// Renderiza os cards
function renderizar() {
  catalogo.innerHTML = "";
  totalPremium = 0;

  animes.forEach((anime) => {
    // Portas lógicas (&&): premium = nota > 9 E episódios > 100
    const ehPremium = anime.nota > 9 && anime.episodios > 100;
    if (ehPremium) totalPremium++;

    // Operador ternário: conteúdo restrito por idade
    const restrito = idadeUsuario > 0 && idadeUsuario < anime.censura;

    // Mídia: imagem ou iframe
    const midiaHTML = ehVideo(anime.linkImagem)
      ? `<iframe class="midia" src="${anime.linkImagem}" frameborder="0" allowfullscreen></iframe>`
      : `<img class="midia" src="${anime.linkImagem}" alt="${anime.nome}" />`;

    const card = document.createElement("div");
    card.className = `card-wrapper`;
    card.innerHTML = `
      <div class="card ${ehPremium ? "premium" : ""} ${restrito ? "restrito" : ""}">
        <span class="censura">+${anime.censura}</span>
        ${midiaHTML}
        <div class="card-conteudo">
          <h2>${anime.nome}</h2>
          <p class="genero">${anime.genero} • ${anime.episodios} eps</p>
          <span class="nota" style="${corDaNota(anime.nota)}">
            ⭐ ${anime.nota} - ${classificacao(anime.nota)}
          </span>
          <p class="resumo">${anime.resumo}</p>
          <div class="curiosidade">
            <strong>💡 Você sabia?</strong> ${anime.curiosidade}
          </div>
        </div>
        ${restrito ? '<div class="aviso-restrito">🔒 Conteúdo Restrito</div>' : ""}
      </div>
    `;
    catalogo.appendChild(card);
  });

  contador.textContent = `${animes.length} animes • ${totalPremium} Premium ⭐`;
}

// Eventos
btnFiltrar.addEventListener("click", () => {
  idadeUsuario = parseInt(inputIdade.value) || 0;
  renderizar();
});

inputIdade.addEventListener("keyup", (e) => {
  if (e.key === "Enter") btnFiltrar.click();
});

// Render inicial
renderizar();
