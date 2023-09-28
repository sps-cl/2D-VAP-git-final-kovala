const text = document.getElementById("text");
const pridatTlacitko = document.getElementById("add");
const seznam = document.getElementById("seznam");
function addTodo() {
  const polozka = document.createElement("li");
  polozka.className = "polozka";
  polozka.innerHTML = text.value;
  const odstranitTlacitko = document.createElement("button");
  odstranitTlacitko.className = "odstranit";
  odstranitTlacitko.innerText = "Odstranit";
  odstranitTlacitko.addEventListener("click", removeTodo);
  polozka.appendChild(odstranitTlacitko);
  seznam.appendChild(polozka);
  text.value = "";
}

function removeTodo() {
  const polozka = this.parentNode;
  seznam.removeChild(polozka);
}

pridatTlacitko.addEventListener("click", addTodo);