const menuItens = document.querySelectorAll (.menu a)

menuItens.forEach(itens => {
  itens.addEventListener('"click', scrollToIdOnClick);
  
})

function scrollToIdOnClick(event){
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;


window.scroll({
  top: to,
  behavior:"smooth" - 80
  }); 

}