let botonElem = document.getElementById("cambiar-cita")
let textoElem = document.getElementById("texto")
let citaElem =  document.getElementById("cita")



function generarEnteroAle (min, max){
        return Math.floor( Math.random() * (max - min) + min )
}


function cambiarTexto() {
let indiceAleatorio = generarEnteroAle(0,textosBiblicos.length)
textoElem.innerText = `"${textosBiblicos[indiceAleatorio].texto}"`
citaElem.innerText = textosBiblicos[indiceAleatorio].cita
    
}

cambiarTexto()



botonElem.addEventListener("click" , cambiarTexto)




var a = 10
var b = 18


console.log(a + b)
