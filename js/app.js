

let state = {
    p: document.getElementById("text-flavia"),
    url: document.getElementById("img-flavia"),
<<<<<<< Updated upstream
    embaixadores: document.getElementById("embaixadores"),
    carousel: document.getElementById("carousel"),
    posts: document.getElementById("posts-cards"),
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
              <h6 class="card-title fw-bold mt-2">AS FÉRIAS ESTÃO CHEGANDO: ideias para entreter as crianças</h6><!--ISSO É UM TÍTULO OU NÃO É? NÃO SEI, MAS PRECISA PEGAR DO ARRAY DADOS OU TITULOS-->
              <p class="card-text small">${artigos[i].paragrafo01}</p><!--PEGAR PARÁGRAFO DO ARRAY-->
              <a href="#" class="btn btn-light btn-sm">Ver artigo &gt;</a>
            </div>
          </div>`
    }








}

if(state.embaixadores){
  carregar()  
}


if(state.posts){
    carregarposts()
}
=======
}

function carregar() {
    console.log(frasesMotivacionais[0].frase);
    console.log(catalogoFilmesSeries[1].imagem);
    state.p.textContent = frasesMotivacionais[0].frase;
    state.url.src = catalogoFilmesSeries[1].imagem;

}


carregar()
>>>>>>> Stashed changes
