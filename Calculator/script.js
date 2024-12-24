let click = document.querySelector(".equal");
let display =document.querySelector(".display");
let AC = document.querySelector(".ac");

function color(){
    display.style.backgroundColor ='red';  
}
function clear(){
display.style.backgroundColor=null;
}
click.addEventListener("click", color);
AC.addEventListener("click", clear);

