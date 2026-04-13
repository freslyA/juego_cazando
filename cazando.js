let canvas= document.getElementById("areaJuego")
let canva=canvas.getContext("2d")
let gatoX=canvas.width/2
let gatoY=canvas.height/2
let comidaX=canvas.width
let comidaY=canvas.height
let puntaje=0
let tiempo=10
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
    restarTiempo(tiempo)
    dibujarComida()
    dibujarGato()
}
function limpiarCanva(){
    canva.clearRect(0,0,canvas.width,canvas.height)
}
function moverIzquierda(){
    gatoX=gatoX-10
    actualizarCanva()
    dectetarColision()
}
function moverDerecha(){
    gatoX=gatoX+10
    actualizarCanva()
    dectetarColision()
}
function moverAbajo(){
    gatoY=gatoY+10
    actualizarCanva()
    dectetarColision()
}
function moverArriba(){
    gatoY=gatoY-10
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
        alert("cuidado")
        comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA)
        comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA)
        actualizarCanva()
        puntaje=puntaje+1;
        mostrarEnSpan("puntos",puntaje)
    }
}
function restarTiempo(segundosIniciales) {
    let tiempo2 = segundosIniciales;

    const intervalo = setInterval(() => {
        mostrarEnSpan("tiempo",tiempo2)

        if (tiempo2 <= 0) {
            clearInterval(intervalo);
            console.log("Tiempo terminado");
        }

        tiempo2--;
    }, 1000); // se ejecuta cada 1 segundo
}