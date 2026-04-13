let canvas= document.getElementById("areaJuego")
let canva=canvas.getContext("2d")
let gatoX=canvas.width/2
let gatoY=canvas.height/2
let comidaX=canvas.width
let comidaY=canvas.height
const ALTO_GATO=20
const ANCHO_GATO=40
const ALTO_COMIDA=20
const ANCHO_COMIDA=20
function dibujarGato(){
    canva.fillStyle="red"
    canva.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO)
}
function dibujarComida(){
    canva.fillStyle="brown"
    canva.fillRect(comidaX-ANCHO_COMIDA,comidaY-ALTO_COMIDA,ANCHO_COMIDA,ALTO_COMIDA)
}
function inciarJuego(){
    dibujarComida()
    dibujarGato()
}