// CONST " "X" = document.querySelector ("X")" ES PARA CREAR ELEMENTOS Y MODIFICARLOS POSTERIOR MENTE

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

// X.addEventListener("Y") para añadir un evento al alemento creado

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})