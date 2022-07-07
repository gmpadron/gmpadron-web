$(document).ready(function () {
  let languagesPage = localStorage.getItem("languagesPageKey");

  if (languagesPage == null) {
    localStorage.setItem("languagesPageKey", "englishPage");

    console.log("datos guardados");
  } else if (languagesPage == "englishPage") {
    //console.log("modo englishPage");
  } else if (languagesPage == "spanishPage") {
    const headerItem = document.querySelector("header");
    const mainItem = document.querySelector("main");
    const newheaderItem = document.createElement("header");
    const newmainItem = document.createElement("main");
    newheaderItem.innerHTML =
      '<div class="content-header"><a href="#section-1"><div class="logo"><span>GM</span></div></a><div class="content-menu"><div class="menu"><div class="menu-status"></div></div></div><nav><ul><li><a class="li-menu" href="#section-1">Inicio</a></li><li><a class="li-menu" href="#section-2">Sobre mi</a></li><li><a class="li-menu" href="#section-3">Habilidades</a></li><li><a class="li-menu" href="#section-4">Experiencia</a></li><li><a class="contacto-color li-menu" href="#section-5">Contacto</a></li><li class="languagesModo"><a>Lenguaje</a></li><li class="themePageModo"><span class="status"></span></li></ul></nav></div>';
    newmainItem.innerHTML =
      '<section id="section-1"><div class="content-section"><div><div class="inicio"><p>Hola, me llamo</p><h2>Gabriel Moises Padron</h2><h6>Y soy</h6><h2>FRONT-END</h2></div></div></div><a href="#section-2"><div class="content-seta-scroll" id="seta-1"><div class="seta-scroll"></div></div></a></section><section id="section-2"><div class="content-section"><div><div class="sobre-mi"><h6>Sobre mi</h6><div><p>Mi nombre es <b>Gabriel Moises Padron</b>, entré en la industria como programador <b>FRONT-END</b> en el 2020.</p><p>Entre más limpio y nativo sea el código mejor.</p><br><p>Colocarme los cascos, darle play a mi mejor playlist y empezar a codear.</p></div></div></div></div><a href="#section-3"><div class="content-seta-scroll" id="seta-2"><div class="seta-scroll"></div></div></a></section><section id="section-3"><div class="content-section"><div><div class="habilidades"><h6>Habilidades</h6><div class="content-skills"><div class="content-btn"><table style="width:100%"><tr><td id="btn-1" class="active-skill"><b>Habilidades</b></td><td id="btn-2"><b>Librerías</b></td></tr><tr><td id="btn-3"><b>Tegnologías</b></td><td id="btn-4"><b>Herramientas</b></td></tr></table></div><div class="skills"><div id="skill-1" class="skill active-skill"><ul><li><img alt="gmpadron-Js" height="40" src="files/img/js-ico.svg"> JavaScript</li><li><img alt="gmpadron-json" height="40" src="files/img/json-ico.svg"> JSON</li><li><img alt="gmpadron-HTML" height="40" src="files/img/html5-ico.svg">HTML 5</li><li><img alt="gmpadron-CSS" height="40" src="files/img/css3-ico.svg">CSS 3</li></ul></div><div id="skill-2" class="skill"><ul><li><img alt="gmpadron-Jquery" height="40" src="files/img/jquery-ico.svg">JQuery</li></ul></div><div id="skill-3" class="skill"><ul><li><img alt="gmpadron-Vtex" height="40" src="files/img/vtex-ico.svg">Vtex</li><li><img alt="gmpadron-Git" height="40" src="files/img/git-ico.svg">Git</li><li><img alt="gmpadron-GitHub" height="40" style="filter:brightness(250%)" src="files/img/girhub-ico.svg">GitHub</li></ul></div><div id="skill-4" class="skill"><ul><li><img alt="gmpadron-VSCode" height="40" src="files/img/vscode-ico.svg">VS Code</li><li><img alt="gmpadron-codespaces" height="40" src="files/img/codespaces-ico.png">Codespaces</li><li><img alt="gmpadron-Trello" height="40" src="files/img/trello-ico.svg">Trello</li><li><img alt="gmpadron-Slack" height="40" src="files/img/slack-ico.svg">Slack</li></ul></div></div></div></div></div></div><a href="#section-4"><div class="content-seta-scroll" id="seta-3"><div class="seta-scroll"></div></div></a></section><section id="section-4"><div class="content-section"><div><div class="experiencia"><h6>Experiencia</h6><div class="content-empresas"><div class="nombre-empresa"><div id="empresa-1"><b>Empresa:</b><p>Pimenta Full</p></div></div><div class="info-empresa"><div id="info-empresa-1"><b>Cargo de la empresa:</b><p>Analista de desarrollo en sistemas</p><br><b>Tiempo en la empresa:</b><p>2 años y 5 meses</p><br><br><b>Mis actividades:</b><p>Creación y mantenimiento de e-comerce así como el deselvovimiento de sus funciones</p><br><b>Site: </b><a target="_blank" href="https://pimentafull.com.br/">Pimenta Full</a></div></div></div></div></div></div><a href="#section-5"><div class="content-seta-scroll" id="seta-4"><div class="seta-scroll"></div></div></a></section><section id="section-5"><div class="content-section"><div><div class="contacto"><div class="content-contacto"><div><a target="_blank" href="https://www.linkedin.com/in/gmpadron/"><img height="40px" src="files/img/linkedin-ico.svg"/><p>gmpadron</p></a></div><div><a target="_blank" href="https://github.com/gmpadron"><img alt="gmpadron-GitHub" height="40" style="filter:brightness(250%)" src="files/img/girhub-ico.svg"><p>gmpadron</p></a></div><div><a target="_blank"><img alt="gmpadron-Email" height="40" src="files/img/outlook-ico.svg"><p>gm.padron@outlook.com</p></a></div></div></div></div></div><div class="content-cubo"><div class="cubo"></div></div></section><div class="barra-desk"><span></span><span></span><span></span><span></span><span></span></div>';
    headerItem.parentNode.replaceChild(newheaderItem, headerItem);
    mainItem.parentNode.replaceChild(newmainItem, mainItem);
    //console.log("modo spanishPage");
  } else if (languagesPage == "portuguesePage") {
    const headerItem = document.querySelector("header");
    const mainItem = document.querySelector("main");
    const newheaderItem = document.createElement("header");
    const newmainItem = document.createElement("main");
    newheaderItem.innerHTML = '<div class="content-header"><a href="#section-1"><div class="logo"><span>GM</span></div></a><div class="content-menu"><div class="menu"><div class="menu-status"></div></div></div><nav><ul><li><a class="li-menu" href="#section-1">Iniciar</a></li><li><a class="li-menu" href="#section-2">Sobre mim</a></li><li><a class="li-menu" href="#section-3">Habilidades</a></li><li><a class="li-menu" href="#section-4">Experiência</a></li><li><a class="contacto-color li-menu" href="#section-5">Contato</a></li><li class="languagesModo"><a>Línguas</a></li><li class="themePageModo"><span class="status"></span></li></ul></nav></div>';
    newmainItem.innerHTML = '<section id="section-1"><div class="content-section"><div><div class="inicio"><p>Olá, meu nome é</p><h2>Gabriel Moises Padron</h2><h6>e sou</h6><h2>FRONT-END</h2></div></div></div><a href="#section-2"><div class="content-seta-scroll" id="seta-1"><div class="seta-scroll"></div></div></a></section><section id="section-2"><div class="content-section"><div><div class="sobre-mi"><h6>Sobre mim</h6><div><p>Meu nome é <b>Gabriel Moises Padron</b>, entrei na indústria como programador <b>FRONT-END</b> em 2020</p><p>Quanto mais claro e nativo for o código, melhor será</p><br><p>Coloco meus fones de ouvido, aperto o play na minha melhor playlist e começo a trabalhar.</p></div></div></div></div><a href="#section-3"><div class="content-seta-scroll" id="seta-2"><div class="seta-scroll"></div></div></a></section><section id="section-3"><div class="content-section"><div><div class="habilidades"><h6>Habilidades</h6><div class="content-skills"><div class="content-btn"><table style="width:100%"><tr><td id="btn-1" class="active-skill"><b>Habilidades</b></td><td id="btn-2"><b>Bibliotecas</b></td></tr><tr><td id="btn-3"><b>Tecnologias</b></td><td id="btn-4"><b>Ferramentas</b></td></tr></table></div><div class="skills"><div id="skill-1" class="skill active-skill"><ul><li><img alt="gmpadron-Js" height="40" src="files/img/js-ico.svg"> JavaScript</li><li><img alt="gmpadron-json" height="40" src="files/img/json-ico.svg"> JSON</li><li><img alt="gmpadron-HTML" height="40" src="files/img/html5-ico.svg">HTML 5</li><li><img alt="gmpadron-CSS" height="40" src="files/img/css3-ico.svg">CSS 3</li></ul></div><div id="skill-2" class="skill"><ul><li><img alt="gmpadron-Jquery" height="40" src="files/img/jquery-ico.svg">JQuery</li></ul></div><div id="skill-3" class="skill"><ul><li><img alt="gmpadron-Vtex" height="40" src="files/img/vtex-ico.svg">Vtex</li><li><img alt="gmpadron-Git" height="40" src="files/img/git-ico.svg">Git</li><li><img alt="gmpadron-GitHub" height="40" style="filter:brightness(250%)" src="files/img/girhub-ico.svg">GitHub</li></ul></div><div id="skill-4" class="skill"><ul><li><img alt="gmpadron-VSCode" height="40" src="files/img/vscode-ico.svg">VS Code</li><li><img alt="gmpadron-codespaces" height="40" src="files/img/codespaces-ico.png">Codespaces</li><li><img alt="gmpadron-Trello" height="40" src="files/img/trello-ico.svg">Trello</li><li><img alt="gmpadron-Slack" height="40" src="files/img/slack-ico.svg">Slack</li></ul></div></div></div></div></div></div><a href="#section-4"><div class="content-seta-scroll" id="seta-3"><div class="seta-scroll"></div></div></a></section><section id="section-4"><div class="content-section"><div><div class="experiencia"><h6>Experiência</h6><div class="content-empresas"><div class="nombre-empresa"><div id="empresa-1"><b>Empresa:</b><p>Pimenta Full</p></div></div><div class="info-empresa"><div id="info-empresa-1"><b>Posição na empresa:</b><p>Analista de Desenvolvimento de Sistemas</p><br><b>Tempo na empresa:</b><p>2 anos e 5 meses</p><br><br><b>Minhas atividades:</b><p>Criação e manutenção de e-commerce bem como o desenvolvimento das suas funções</p><br><b>Site: </b><a target="_blank" href="https://pimentafull.com.br/">Pimenta Full</a></div></div></div></div></div></div><a href="#section-5"><div class="content-seta-scroll" id="seta-4"><div class="seta-scroll"></div></div></a></section><section id="section-5"><div class="content-section"><div><div class="contacto"><div class="content-contacto"><div><a target="_blank" href="https://www.linkedin.com/in/gmpadron/"><img height="40px" src="files/img/linkedin-ico.svg"/><p>gmpadron</p></a></div><div><a target="_blank" href="https://github.com/gmpadron"><img alt="gmpadron-GitHub" height="40" style="filter:brightness(250%)" src="files/img/girhub-ico.svg"><p>gmpadron</p></a></div><div><a target="_blank"><img alt="gmpadron-Email" height="40" src="files/img/outlook-ico.svg"><p>gm.padron@outlook.com</p></a></div></div></div></div></div><div class="content-cubo"><div class="cubo"></div></div></section><div class="barra-desk"><span></span><span></span><span></span><span></span><span></span></div>';
    headerItem.parentNode.replaceChild(newheaderItem, headerItem);
    mainItem.parentNode.replaceChild(newmainItem, mainItem);
    //console.log("modo portuguesePage");
  } else {
    console.log("error Languages Page");
  }

  $("#englishPageModo").click(function () {
    let languagesPage = localStorage.getItem("languagesPageKey");

    if (languagesPage == "englishPage") {
      $(".languages-option").toggleClass("languages-option-on");
      $("header").toggleClass("menu-mob-on");
    } else if (languagesPage != "englishPage") {
      localStorage.setItem("languagesPageKey", "englishPage");
      location.reload();
    } else {
      console.log("error click Languages Page");
    }
  });
  $("#spanishPageModo").click(function () {
    let languagesPage = localStorage.getItem("languagesPageKey");

    if (languagesPage == "spanishPage") {
      $(".languages-option").toggleClass("languages-option-on");
      $("header").toggleClass("menu-mob-on");
    } else if (languagesPage != "spanishPage") {
      localStorage.setItem("languagesPageKey", "spanishPage");
      location.reload();
    } else {
      console.log("error click Languages Page");
    }
  });
  $("#portuguesePageModo").click(function () {
    let languagesPage = localStorage.getItem("languagesPageKey");
    $(".languages-option").toggleClass("languages-option-on");
    if (languagesPage == "portuguesePage") {
    } else if (languagesPage != "portuguesePage") {
      localStorage.setItem("languagesPageKey", "portuguesePage");
      location.reload();
    } else {
      console.log("error click Languages Page");
    }
  });
});
