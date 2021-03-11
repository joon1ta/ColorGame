//variables//

let colors = [];

let divs = document.querySelectorAll(".square");

let pickedColor = pickColor();

var span = document.querySelector("#colorDisplay")

let h1 = document.querySelector('h1')

var mensaje = document.querySelector("#message")

var botonReset = document.querySelector("#reset")

var numero = 6

var metodoJuego = document.querySelectorAll(".metodoJuego")



//codigos//

botonReset.addEventListener("click", function() {
    reset()
})


span.textContent = pickedColor;

function divsColores() {
    for (let j = 0; j < divs.length; j++) {
        divs[j].style.backgroundColor = colors[j];

        divs[j].addEventListener("click", function() {
            let clickedColor = colors[j];

            if (clickedColor == pickedColor) {
                document.querySelector("#message").textContent = "Correct!";
                h1.style.color = pickedColor
                changeColors(pickedColor)


            } else {
                this.style.backgroundColor = "#232323";
                document.querySelector("#message").textContent = "Try Again";
            }
        });
    }
}
//funciones//
init()

function init() {
    reset()
    divsColores()
    metodosDeJuego()
}

function changeColors(color) {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

//crea numero al azar para color rgb//

function generarNumero(numero) {
    return (Math.random() * numero).toFixed(0);
}


function randomColor() {
    var coolor = "(" + generarNumero(255) + "," + generarNumero(255) + "," + generarNumero(255) + ")";
    return "rgb" + coolor;
}


function generateRandomColors(num) {
    let arreglo = []
    for (let i = 0; i < num; i++) {

        arreglo[i] = randomColor()
    }
    return arreglo
}


function reset() {
    colors = generateRandomColors(numero);
    pickedColor = pickColor();
    span.textContent = pickedColor

    for (let i = 0; i < divs.length; i++) {
        if (colors[i]) {
            divs[i].style.backgroundColor = colors[i]
            divs[i].style.display = "block"
        } else {
            divs[i].style.display = "none"
        }
    }
    h1.style.backgroundColor = "#232323"
    h1.style.color = "white"
    mensaje.textContent = ""
    botonReset.textContent = "New colors"
}


function metodosDeJuego() {
    for (let i = 0; i < metodoJuego.length; i++) {
        metodoJuego[i].addEventListener("click", function() {
            metodoJuego[0].classList.remove("selected");
            metodoJuego[1].classList.remove("selected");
            this.classList.add("selected");
            numero = (this.textContent === "Easy") ? 3 : 6
            reset();

        })
    }
}