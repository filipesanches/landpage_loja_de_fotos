//Abre Fecha menu
let divMenu = document.getElementsByTagName('div')[1] //menuAbreFecha
let menu = document.querySelector('ul#menu') //menuConteudo
let mudaico = document.getElementById('mudaico') //IconeMenu
divMenu.addEventListener('click', function(){ 
  if (menu.style.display == 'none') {
    mudaico.classList.remove('fa-bars')
    mudaico.classList.add('fa-times')
    menu.style.display = 'block'    
  } else {
    mudaico.classList.remove('fa-times')
    mudaico.classList.add('fa-bars')
    menu.style.display = 'none' 
  }
})

//Exibe o menu de acordo com a largura da pagina
function tamanho(){
  let largura = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
  if(largura <= 720){
    menu.style.display = 'none' 
  } else{
    menu.style.display = 'block' 
  }}
  window.onload = tamanho()
  window.addEventListener('resize', tamanho)

//Topo Scroll
window.onscroll = function() {topoScroll()}
function topoScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('header').style.padding = '20px'
    document.querySelector('header').style.background = 'var(--cinzatransparente)'
  } else {
    document.querySelector('header').style.padding = '40px 20px'
    document.querySelector('header').style.background = 'var(--cinzaclaro1)'
  }
}

//Fecha Whats
let closeWhats = document.querySelector('i.fas.fa-times-circle') //IconeFecharWhats
let whats = document.getElementById('btn-whats')
closeWhats.addEventListener('click', function(){
    whats.style.display = 'none'
})