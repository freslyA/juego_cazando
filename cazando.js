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
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"red");
}
function dibujarComida(){
    graficarRectangulo(comidaX-ANCHO_COMIDA,comidaY-ALTO_COMIDA,ANCHO_COMIDA,ALTO_COMIDA,"brown")
}
function inciarJuego(){
    dibujarComida()
    dibujarGato()
}
function limpiarCanva(){
    canva.clearRect(0,0,canvas.width,canvas.height)
}
function moverIzquierda(){
    gatoX=gatoX-10
    actualizarCanva()
}
function moverDerecha(){
    gatoX=gatoX+10
    actualizarCanva()
}
function moverAbajo(){
    gatoY=gatoY+10
    actualizarCanva()
}
function moverArriba(){
    gatoY=gatoY-10
    actualizarCanva()
}
function actualizarCanva(){
    limpiarCanva()
    dibujarGato()
    dibujarComida()
}