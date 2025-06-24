

let state = {
  p: document.getElementById("text-flavia"),
  url: document.getElementById("img-flavia"),
  embaixadores: document.getElementById("embaixadores"),
  carousel: document.getElementById("carousel"),
  posts: document.getElementById("posts-cards"),
  // Pág Nossa Empresa
  pNossaEmpresa_missao: document.getElementById("sec_03-missao"),
  pNossaEmpresa_visao: document.getElementById("sec_03-visao"),
  pNossaEmpresa_valores: document.getElementById("sec_03-valores"),
  pNossaEmpresa_historia: document.getElementById("sec_02-historia"),
  pNossaEmpresa_empresa: document.getElementById("sec01_nossa-empresa"),
}

let stateNossaEmpresa = {
  pNossaEmpresa: document.getElementById("sec_03-missao"),
}

function carregar() {
  for (let i = 0; i < 4; i++) {
    console.log(frasesMotivacionais[i].frase);
    state.embaixadores.innerHTML += `<div class="embaixador">
        <img src="${catalogoFilmesSeries[i].imagem}" alt="Flávia Calina">
        <h5>${frasesMotivacionais[i].autor}</h5><!--PERGUNTAR PRO WALLACE SE É PRA PEGAR DO ARRAY OU NÃO-->
        <p>${frasesMotivacionais[i].frase}</p><!--PARAGRAFO CURTO ARRAY-->
      </div>`
  }

}

function carregarposts() {
  for (let i = 0; i < 8; i++) {
    console.log(frasesMotivacionais[i].data);
    state.posts.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${catalogoFilmesSeries[i].imagem}" class="card-img-top" alt="Imagem card"><!--PEGAR IMAGEM DO ARRAY-->
            <div class="card-body">
              <small>${frasesMotivacionais[i].data}</small><!--PEGAR DATA DO ARRAY-->
              <h6 class="card-title fw-bold mt-2">${artigos[i].titulo}</h6><!--ISSO É UM TÍTULO OU NÃO É? NÃO SEI, MAS PRECISA PEGAR DO ARRAY DADOS OU TITULOS-->
              <p class="card-text small">${artigos[i].paragrafo01}</p><!--PEGAR PARÁGRAFO DO ARRAY-->
              <a href="#" class="btn btn-light btn-sm">Ver artigo &gt;</a>
            </div>
          </div>`
  }

}

function carregarNossaEmpresa() {
  for (let i = 0; i < artigos.length; i++) {
    state.pNossaEmpresa_missao.innerHTML = `${artigos[i].paragrafo01}`
    state.pNossaEmpresa_visao.innerHTML = `${artigos[i].paragrafo02}`
    state.pNossaEmpresa_valores.innerHTML = `${artigos[i].paragrafo03}`

    console.log(artigos[i].paragrafo01);
  }

  for (let i = 0; i < noticias.length; i++) {
    if (i == 0) {
      state.pNossaEmpresa_historia.innerHTML = `${noticias[i].resumo}`
    }

    state.pNossaEmpresa_empresa.innerHTML = `${noticias[i].resumo}`

    console.log(noticias[i].resumo);
    console.log(i);
  }

}

if (state.embaixadores) {
  carregar()
}

if (state.pNossaEmpresa_missao && state.pNossaEmpresa_historia) {
  carregarNossaEmpresa()
}


if (state.posts) {
  carregarposts();
}
