let canvas= document.getElementById("areaJuego")
let canva=canvas.getContext("2d")

function dibujarGato(){
    canva.fillStyle="red"
    canva.fillRect(canvas.width/2,canvas.height/2,20,20)
}