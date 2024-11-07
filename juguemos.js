

function permitirDrop(event) {
    event.preventDefault();
}

function arrastrar(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function soltar(event) {
    event.preventDefault();
    const idImagen = event.dataTransfer.getData("text");
    const imagen = document.getElementById(idImagen);
    if (event.target.classList.contains("rompecabezas") && event.target.children.length === 0) {
        event.target.appendChild(imagen);
    }
}

function reiniciar() {
    const divImagenes = document.querySelector('.divImagenes');
    const piezas = document.querySelectorAll('.imagenes');
    piezas.forEach(pieza => divImagenes.appendChild(pieza));
}
