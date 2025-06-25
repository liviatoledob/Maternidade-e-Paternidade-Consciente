

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
  //Pag Relatos
  relatos: document.getElementById("relatos"),
  relato1: document.getElementById("relato1"),
  relato2: document.getElementById("relato2"),
  relato3: document.getElementById("relato3"),
  autor1: document.getElementById("autor1"),
  autor2: document.getElementById("autor2"),
  autor3: document.getElementById("autor3"),
  //Pág. Contatos
  contate_nos: document.getElementById("contate-nos"),
  parceria: document.getElementById("parceria"),
  btnEnviar: document.getElementById('btnEnviar'),
  //Pág. Produtos
  produtos: document.getElementById("produtos"),
  produtos_card1: document.getElementById("produtos-card1"),
  produtos_card2: document.getElementById("produtos-card2"),
  produtos_card3: document.getElementById("produtos-card3"),
  produtos_card4: document.getElementById("produtos-card4"),
  produtos_card5: document.getElementById("produtos-card5"),
  produtos_card6: document.getElementById("produtos-card6"),
  parceiro1: document.getElementById("parceiro1"),
  parceiro2: document.getElementById("parceiro2"),
  parceiro3: document.getElementById("parceiro3"),
  parceiro4: document.getElementById("parceiro4"),
  parceiro5: document.getElementById("parceiro5"),
  card_produtos: document.getElementById("card-produtos"),
  //Pág. Home
  sec01_p1: document.getElementById("sec01-p1"),
  sec01_p2: document.getElementById("sec01-p2"),
  sec01_p3: document.getElementById("sec01-p3"),
  sec01_cards: document.getElementById("sec01-cards"),
  sec01_img: document.getElementById("sec01-img"),
  mais_acessados: document.getElementById("mais-acessados"),
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

function carregarRelatos() {
  for (let i = 0; i < frasesMotivacionais.length; i++) {
    state.relatos.innerHTML = `${poemas[i].texto}`

    if (i == 0) {
      state.relato1.innerHTML = `"${frasesMotivacionais[i].frase}"`
      state.autor1.innerHTML = `${frasesMotivacionais[i].autor}`
    } else if (i == 1) {
      state.relato2.innerHTML = `"${frasesMotivacionais[i].frase}"`
      state.autor2.innerHTML = `${frasesMotivacionais[i].autor}`
    } else {
      state.relato3.innerHTML = `"${frasesMotivacionais[i].frase}"`
      state.autor3.innerHTML = `${frasesMotivacionais[i].autor}`

    }



    console.log(i)
  }
}

function carregarProdutos() {
  for (let i = 0; i < 10; i++) {
    state.produtos.innerHTML = `${poemas[i].texto}`
    if (i == 0) {
      
      state.parceiro1.innerHTML = `<img src="${poemas[i].imagem}" class="rounded-circle mb-2 img-fluid" alt="Babysec">`
    }else if(i==1){
      
      state.parceiro2.innerHTML = `<img src="${poemas[i].imagem}" class="rounded-circle mb-2 img-fluid" alt="Logo Little Duck">`
    }else if(i==2){
      
      state.parceiro3.innerHTML = `<img src="${poemas[i].imagem}" class="rounded-circle mb-2 img-fluid" alt="Logo Ted Boom">`
    }else if(i==3){
      
      state.parceiro4.innerHTML = `<img src="${poemas[i].imagem}" class="rounded-circle mb-2 img-fluid" alt="Logo Aliexpress">`
    }else if(i==4){
      
      state.parceiro5.innerHTML = `<img src="${poemas[i].imagem}" class="rounded-circle mb-2 img-fluid" alt="Logo Kiddo">`
    }

  }

  for(let i = 0; i < 6; i++){
    state.card_produtos.innerHTML += `<div class="col-md-6 col-xl-4">
            <div class="card h-100">
              <img src="${catalogoFilmesSeries[i].imagem}" class="card-img-top" alt="Imagem 1">
              <div class="card-body">
                <h5 class="card-title fw-bold">${artigos[i].titulo}
                </h5><!--PEGAR TITULO DO TITULOS.JS-->
                <p class="card-text" id="produtos-card1">${artigos[i].paragrafo01}</p>
                <!--PEGAR PARÁGRAFO DO ARRAY-->
                <a href="#" class="text-dark fw-bold">LEIA ARTIGO ></a>
              </div>
            </div>
          </div>`
  }
}

function carregarContatos() {
  for (let i = 0; i < 6; i++) {
    state.contate_nos.innerHTML = `${artigos[i].paragrafo03}`;
    state.parceria.innerHTML = `${artigos[i].paragrafo01}`;
    console.log(artigos[i].paragrafo03);


  }

}

function carregarHome(){
  for(let i = 0; i < artigos.length; i++){
    state.sec01_p1.innerHTML = `${artigos[i].paragrafo02}`
    state.sec01_p2.innerHTML = `${artigos[i].paragrafo03}`
    state.sec01_p3.innerHTML = `${artigos[i].paragrafo01}`
    console.log(artigos[i].paragrafo01);
    
  }
  for (let i = 0; i < 2; i++) {
    state.sec01_cards.innerHTML += `<div class="col-12 col-md-6">
              <div class="card h-100">
                <img src="${catalogoFilmesSeries[i].imagem}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${noticias[i].titulo}</h5>
                  <p class="card-text">${noticias[i].resumo}</p>
                </div>
              </div>
            </div>`
    
  }
  for(let i = 0; i < 6; i++){
    state.sec01_img.innerHTML = `<img src="${catalogoFilmesSeries[i].imagem}" alt="Anúncio" class="img-fluid">`
    state.mais_acessados.innerHTML += `<div class="col-12 col-sm-6 col-md-4">
          <img src="${eventos[i].imagem}" alt="" class="img-fluid mb-2">
          <h6>${eventos[i].nome}</h6>
        </div>`
  }
}

if(state.sec01_p1){
  carregarHome()
}

if (state.embaixadores) {
  carregar()
}

if (state.pNossaEmpresa_missao && state.pNossaEmpresa_historia) {
  carregarNossaEmpresa()
}

if (state.relatos) {
  carregarRelatos()
}

if (state.contate_nos) {
  carregarContatos()
}

if (state.produtos) {
  carregarProdutos()
}


if (state.posts) {
  carregarposts();
}
