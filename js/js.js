function menu() {
  if (document.getElementById("menu").style.display === "none") {
    document.getElementById("menu").style.display = "block";
    document.getElementById("mudaico").classList.remove("fa-bars");
    document.getElementById("mudaico").classList.add("fa-times");
}else{
  document.getElementById("menu").style.display = "none";
  document.getElementById("mudaico").classList.remove("fa-times");
  document.getElementById("mudaico").classList.add("fa-bars");
}}
function fechabtn() {
  document.getElementById("btn-whats").style.display = "none";
}
