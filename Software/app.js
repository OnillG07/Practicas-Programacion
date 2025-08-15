let titulo = document.getElementById(tituloPrincipal)
let boton = document.getElementById(cambiarFondoBtn)
let soyEdward = true;

cambiarFondoBtn.onclick = function (){
    let cambiarFondoBtn = "#" + Math.floor(Math.random()*16777215).toString(16);
document.body.style.background = cambiarFondoBtn;

console.log(cambiarFondoBtn)

if (soyEdward) {
    tituloPrincipal.textContent = "Me tocaste"
    soyEdward = false;
} else {
    tituloPrincipal.textContent = "No me toques"
    soyEdward = true;
}
};


