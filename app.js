let numeroSecreto = 0;
let intentos = 0;
let listaNunmerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let = numeroDeUsuario = parseInt(
    document.getElementById("valorUsuario").value
  );

  if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número con ${intentos} ${
        intentos === 1 ? "intento." : "intentos."
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // El usuario no acerto.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento(
        "p",
        `El número secreto es menor. Ya vas por el intento n° ${intentos}.`
      );
    } else {
      asignarTextoElemento(
        "p",
        `El número secreto es mayor. Ya vas por el intento n° ${intentos}.`
      );
    }
    intentos++;
    limpiarCaja();
  }

  return;
}

function limpiarCaja() {
  document.querySelector(`#valorUsuario`).value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //si el numero generado esta incluido en la lista

  // Ya sorteamos todos los numeros?
  if (listaNunmerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    if (listaNunmerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNunmerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numeros
  //Generar el numero aleatorio
  //Inicializar el numero de intentos
  condicionesIniciales();
  //Deshabilitar el boton de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  //Inicializar el numero de intentos
}

condicionesIniciales();
