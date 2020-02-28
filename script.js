const dinero = document.getElementById("dinero-en-mex");
const cambioMex = document.getElementById("tipo-de-cambio-mex");
const cambioArg = document.getElementById("tipo-de-cambio-arg");
const button = document.getElementById("button");
const title = document.getElementById("title");
const dineroEnArg = document.getElementById("dinero-en-arg");
const alert = document.getElementById("alert")

button.onclick = () => {
  if (dinero.value && cambioMex.value && cambioArg.value) {
    alert.setAttribute("style", "display: none")
    title.setAttribute("style", "display: block");
    dineroEnArg.setAttribute("style", "display: block");
    dineroEnArg.innerHTML =
      "$" + (dinero.value / cambioMex.value * cambioArg.value).toFixed(2);
  } else {
    title.setAttribute("style", "display: none");
    dineroEnArg.setAttribute("style", "display: none");
    alert.setAttribute("style", "display: block")
  }
};