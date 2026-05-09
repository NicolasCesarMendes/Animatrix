const animes = [
  {
    nome: "Re:ZERO -Starting Life in Another World-",
    genero: "Fantasia / Drama",
    nota: 9.6,
    censura: 18,
    episodios: 85,
    linkImagem: "https://myanimelist.net/images/anime/1522/128039l.jpg",
    resumo: "Subaru é transportado para um mundo de fantasia, conhece Satella e decide ajudá-la a recuperar uma insígnia roubada. Porém, os dois acabam mortos por uma ameaça misteriosa.",
    curiosidade: "Re:ZERO é um dos primeiros do famoso gênero Isekai a se popularizar, sendo atualmente um dos mais assistidos."
  },
  {
    nome: "I Want To Eat Your Pancreas",
    genero: "Drama / Romance",
    nota: 9.8,
    censura: 12,
    episodios: 1,
    linkImagem: "https://m.media-amazon.com/images/M/MV5BOWE0NTJlYWEtY2NiNy00OTliLWI3NWUtYzY5NmU4OGQ3ZmE5XkEyXkFqcGc@._V1_.jpg",
    resumo: "Um garoto introvertido descobre que sua colega Sakura possui uma doença terminal no pâncreas e decide acompanhá-la em seus últimos dias.",
    curiosidade: "O título vem de uma antiga crença japonesa de que comer um órgão saudável poderia curar alguém com problemas nesse mesmo órgão."
  },
  {
    nome: "Dandadan",
    genero: "Ação / Sobrenatural / Comédia",
    nota: 8.9,
    censura: 16,
    episodios: 24,
    linkImagem: "https://www.animeunited.com.br/oomtumtu/2025/08/306-dandadan-anime-poster-momo-dandadan-okarun-dandadan.png",
    resumo: "Momo e Okarun entram em uma disputa sobre fantasmas e alienígenas, mas acabam descobrindo que ambos existem.",
    curiosidade: "Dandadan ficou famoso pela mistura caótica de ação, humor absurdo e animação extremamente fluida."
  },
  {
    nome: "Tsuki ga Kirei",
    genero: "Romance / Slice of Life",
    nota: 8.3,
    censura: 10,
    episodios: 12,
    linkImagem: "https://m.media-amazon.com/images/S/pv-target-images/c8c9463f998edba1b2f3bdfce6f354f494d1c4a795622e3837985e31f0c68207.jpg",
    resumo: "Dois estudantes tímidos começam a se aproximar e vivem um romance simples e realista durante o ensino fundamental.",
    curiosidade: "O nome do anime significa “A Lua Está Linda”, uma forma poética japonesa de dizer “eu te amo”."
  },
  {
    nome: "Josee, the Tiger and the Fish",
    genero: "Drama / Romance",
    nota: 9.5,
    censura: 12,
    episodios: 1,
    linkImagem: "https://i.ytimg.com/vi/w6IsHL91aXo/maxresdefault.jpg",
    resumo: "Tsuneo conhece Josee, uma jovem cadeirante apaixonada por desenhos e livros, e os dois acabam mudando a vida um do outro.",
    curiosidade: "O filme é baseado em um conto japonês lançado originalmente em 1985."
  },
  {
    nome: "Bocchi the Rock!",
    genero: "Comédia / Música",
    nota: 9.0,
    censura: 10,
    episodios: 12,
    linkImagem: "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/BZXUYIRG5JCMVCKBDTVK4AL6JM.jpeg?auth=2929cfb66aba8e783cf69e179c20237971e45ce3d6cfadd004c8d6998704b8c3&width=1200&height=675",
    resumo: "Hitori Gotou, uma garota extremamente tímida, entra para uma banda e tenta superar sua ansiedade social.",
    curiosidade: "O anime viralizou por representar ansiedade social de maneira criativa e exageradamente engraçada."
  },
  {
    nome: "Hell's Paradise",
    genero: "Ação / Fantasia Sombria",
    nota: 9.3,
    censura: 18,
    episodios: 25,
    linkImagem: "https://ovicio.com.br/wp-content/uploads/2025/11/20251128-hells-paradise-jigokuraku-temporada-2-ovicio.webp",
    resumo: "Gabimaru, um ninja condenado à morte, participa de uma missão mortal em uma ilha misteriosa em busca do elixir da imortalidade.",
    curiosidade: "O anime faz parte da chamada “Dark Trio” moderna da Shonen Jump."
  },
  {
    nome: "Kaiju No. 8",
    genero: "Ação / Ficção Científica",
    nota: 8.7,
    censura: 14,
    episodios: 23,
    linkImagem: "https://gaming-cdn.com/images/products/20277/orig/kaiju-no-8-the-game-pc-steam-cover.jpg?v=1759493972",
    resumo: "Kafka Hibino ganha a habilidade de se transformar em um kaiju enquanto tenta entrar na força de defesa do Japão.",
    curiosidade: "Kaiju No. 8 rapidamente se tornou um dos mangás mais vendidos da Jump+."
  },
  {
    nome: "The Fragrant Flower Blooms with Dignity",
    genero: "Romance / Escolar",
    nota: 8.2,
    censura: 12,
    episodios: 12,
    linkImagem: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2025/07/kaoruko-and-rintaro-look-at-each-other-happily-in-the-fragrant-flower-blooms-with-dignity-1.jpeg",
    resumo: "Dois estudantes de escolas rivais acabam se aproximando apesar dos preconceitos entre seus grupos.",
    curiosidade: "O mangá ganhou destaque pela relação madura e saudável entre os protagonistas."
  },
  {
    nome: "Your Name.",
    genero: "Romance / Fantasia",
    nota: 9.1,
    censura: 12,
    episodios: 1,
    linkImagem: "https://myanimelist.net/images/anime/5/87048l.jpg",
    resumo: "Dois adolescentes começam a trocar de corpos misteriosamente e criam uma conexão profunda mesmo sem se conhecerem.",
    curiosidade: "Your Name se tornou um dos filmes de anime de maior bilheteria da história."
  },
  {
    nome: "A Silent Voice",
    genero: "Drama",
    nota: 9.7,
    censura: 12,
    episodios: 1,
    linkImagem: "https://takanodan.net/assets/images/posts/14-knk/cover.jpg",
    resumo: "Um garoto tenta se redimir após ter praticado bullying contra uma colega surda durante a infância.",
    curiosidade: "O filme aborda temas como bullying, depressão e perdão de maneira extremamente sensível."
  },
  {
    nome: "Kiki's Delivery Service",
    genero: "Fantasia / Slice of Life",
    nota: 9.5,
    censura: 0,
    episodios: 1,
    linkImagem: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/344/2024/06/23065214/kikis-delivery-service.png",
    resumo: "Kiki, uma jovem bruxa, sai de casa para treinar sua independência criando um serviço de entregas voadoras.",
    curiosidade: "O filme foi dirigido por Hayao Miyazaki e produzido pelo Studio Ghibli em 1989."
  },
  {
    nome: "The Angel Next Door Spoils Me Rotten",
    genero: "Romance / Slice of Life",
    nota: 8.0,
    censura: 10,
    episodios: 24,
    linkImagem: "https://jotaku.net/wp-content/uploads/2023/05/angel-next-door-thumb.png",
    resumo: "Amane vive sozinho e acaba se aproximando de Mahiru, a garota mais popular da escola, após ajudá-la em um dia de chuva.",
    curiosidade: "Mahiru é apelidada de “anjo” pelos colegas devido à sua beleza e personalidade perfeita."
  },
  {
    nome: "Shangri-La Frontier",
    genero: "Ação / Aventura / Jogos",
    nota: 8.4,
    censura: 12,
    episodios: 50,
    linkImagem: "https://m.media-amazon.com/images/S/pv-target-images/13d2dfca4d62f2dc82c6a672d1945a492e38d240a877640e0dd8a03fe7a5cb42.jpg",
    resumo: "Rakuro, um jogador especialista em jogos ruins, decide enfrentar o popular MMORPG Shangri-La Frontier em busca de um verdadeiro desafio.",
    curiosidade: "O anime ficou conhecido pelas cenas de ação extremamente fluidas e pela qualidade da animação."
  },
  {
    nome: "[Oshi no Ko]",
    genero: "Drama / Mistério",
    nota: 9.2,
    censura: 16,
    episodios: 35,
    linkImagem: "https://myanimelist.net/images/anime/1812/134736l.jpg",
    resumo: "Após um acontecimento trágico, Aqua e Ruby entram no mundo do entretenimento japonês em busca da verdade por trás da morte de sua mãe.",
    curiosidade: "O primeiro episódio do anime possui duração equivalente a um filme, com cerca de 90 minutos."
  }
];

let idadeUsuario = 18;

const catalogo = document.getElementById("catalogo");
const botoesIdade = document.querySelectorAll(".btn-idade");

function corDaNota(nota) {
  return nota >= 10
    ? "background:#1b5e20;color:#fff"

    : nota >= 9
    ? "background:#4caf50;color:#fff"

    : nota >= 8
    ? "background:#8bc34a;color:#fff" 

    : nota >= 7
    ? "background:#ffeb3b;color:#000"

    : "background:#f44336;color:#fff";
}

function renderizar() {
  catalogo.innerHTML = "";

  animes.forEach((anime) => {
    const restrito = idadeUsuario < anime.censura;

    const card = document.createElement("div");
    card.className = `card ${restrito ? "restrito" : ""}`;
    card.innerHTML = `
        <span class="censura">
          ${anime.censura === 0 ? "LIVRE" : "+" + anime.censura}
        </span>
        <img class="midia" src="${anime.linkImagem}" alt="${anime.nome}" />
        <div class="card-conteudo">
          <h2>${anime.nome}</h2>
          <p class="genero">${anime.genero} • ${anime.episodios} eps</p>
          <span class="nota" style="${corDaNota(anime.nota)}">
  ⭐        ${anime.nota}
          </span>
          <p class="resumo">${anime.resumo}</p>
          <div class="curiosidade">
            <strong>💡 Você sabia?</strong> ${anime.curiosidade}
          </div>
        </div>
        ${restrito ? '<div class="aviso-restrito"> Conteúdo Restrito</div>' : ""}
      </div>
    `;
    catalogo.appendChild(card);
  });
}

botoesIdade.forEach((btn) => {
  btn.addEventListener("click", () => {
    idadeUsuario = parseInt(btn.dataset.idade) || 0;
    botoesIdade.forEach((b) => b.classList.remove("ativo"));
    btn.classList.add("ativo");
    renderizar();
  });
});

renderizar();