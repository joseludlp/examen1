let contador = document.getElementById('contador')
let informacion = document.getElementById('informacion')
let x = 0
let alertas = 0

function presionado(){
    if (alertas == 0){
        alert('¡Botón clicado!')
        x = x + 1
        contar()
    }
    else if (alertas == 1){
        x = x + 1
        contar()
    }
}

function contar(){
    contador.textContent = 'veces presionado: ' + x
}

function desactivar(){
    alertas = 1
    informacion.textContent = 'Las alertas están desactivadas'
}
function activar(){
    alertas = 0
    informacion.textContent = 'Las alertas están activadas'
}