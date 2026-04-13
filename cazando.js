let canvas= document.getElementById("areaJuego")
let canva=canvas.getContext("2d")
let gatoX=canvas.width/2
let gatoY=canvas.height/2
let comidaX=canvas.width
let comidaY=canvas.height
let puntaje=0
let tiempo=15;
let intervalo;
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
    restarTiempo()
    cambiarComida()
    dibujarGato()
}
function limpiarCanva(){
    canva.clearRect(0,0,canvas.width,canvas.height)
}
function moverIzquierda(){
    gatoX=gatoX-20
    actualizarCanva()
    dectetarColision()
}
function moverDerecha(){
    gatoX=gatoX+20
    actualizarCanva()
    dectetarColision()
}
function moverAbajo(){
    gatoY=gatoY+20
    actualizarCanva()
    dectetarColision()
}
function moverArriba(){
    gatoY=gatoY-20
    actualizarCanva()
    dectetarColision()
}
function actualizarCanva(){
    limpiarCanva()
    dibujarGato()
    dibujarComida()
}
function dectetarColision(){
    if((gatoX+ANCHO_GATO>comidaX-ANCHO_COMIDA && gatoX<comidaX) && (gatoY+ALTO_GATO>comidaY-ALTO_COMIDA && gatoY<comidaY)){
        cambiarComida()
        actualizarCanva()
        puntaje=puntaje+1;
        tiempo=tiempo+6;
        mostrarEnSpan("puntos",puntaje)
    }
    if(puntaje==6){
        alert("GANASTE!!!")
        clearInterval(intervalo);
    }
}
function restarTiempo() {
    intervalo = setInterval(() => {
        mostrarEnSpan("tiempo", tiempo);

        if (tiempo <= 0) {
            clearInterval(intervalo);
            alert("GAME OVER");
        }

        tiempo--;
    }, 1000);
}
function cambiarComida(){
    comidaX=generarAleatorio(ANCHO_COMIDA,canvas.width-ANCHO_COMIDA)
    comidaY=generarAleatorio(ALTO_COMIDA,canvas.height-ALTO_COMIDA)
    dibujarComida()
}
function reiniciar(){
    puntaje=0
    tiempo=15
    mostrarEnSpan("tiempo",tiempo)
    mostrarEnSpan("puntos",puntaje)
    limpiarCanva()
    cambiarComida()
    dibujarGato()
}