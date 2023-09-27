//Sidebar

var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation_header");
var content = document.getElementById("content");
var showSidebar = false;

function openSidebar() {
  showSidebar = !showSidebar;
  if (showSidebar) {
    navigationHeader.style.marginLeft = "0vw";
    navigationHeader.style.animationName = "showSidebar";
    content.style.filter = "blur(1px)";
  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = ""; 
    content.style.filter = "";
  }
}

function closeSidebar() {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = "";
    content.style.filter = "";
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar){
        openSidebar();
    }
});


//chamada Ajax para exibição meus projetos na mesma página

document.querySelectorAll('[pf-nav]').forEach(link => {
  const conteudo = document.getElementById('content-projects');
  
      link.onclick =function(e) {
          e.preventDefault();
          fetch(link.getAttribute('pf-nav'))
          .then(resp => resp.text())
          .then(html => conteudo.innerHTML =html);
  
  }
  
  })

