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
  polozka.appendChild(odstranitTlacitko);
  seznam.appendChild(polozka);
  text.value = "";
}
pridatTlacitko.addEventListener("click", addTodo);