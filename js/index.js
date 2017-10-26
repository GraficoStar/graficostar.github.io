var menu = document.querySelector(".menu");
menu.addEventListener("click", mostraryocultarmenu);
function mostraryocultarmenu(){
  var botones = document.querySelector(".botones");
  botones.classList.toggle('despliegue');
}
