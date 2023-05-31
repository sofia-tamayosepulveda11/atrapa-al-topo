const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;
let posiciontopo = null;

function cuadradoazar(){
  cuadrado.forEach((nombredeclase) => {
    nombredeclase.classList.remove("topo");
  });

  let posicionalazar =cuadrado[Math.floor(Math.random)() *9)];
  posicionalazar.classList.add("topo");

  posiciontopo = posicionalazar.id;
}

cuadrado.forEach((identificador) => {
  identificador.addEventListener("click", () => {
    if (identificador.id === posiciontopo) {
      resultado = resultado + 1;
      puntaje.textContent = resultado;
      posicionalazar = null;
    }
  });
});
function movertopo() {
  tiempotopo = setInterval(cuadroazar, 700);
}
movertopo();

function cuentaregresiva () {
  tiempoactual --;
  tiempofaltante.textContent = tiempoactual;
  if (tiempoactual === 0) {
    clearInterval(idtiempo);
    clearInterval(tiempotopo);
    alert("Se acabo el tiempo, tu putaje es" + resultado + "topos atraádos");
  }
}
let idtiempo = setInterval(cuentaregresiva, 1000);