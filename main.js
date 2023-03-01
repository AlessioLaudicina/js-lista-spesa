const listaSpesa = [
  "Pane",
  "Acqua",
  "Insalata",
  "Pasta",
  "Carne",
  "Pesce",
  "Marmellata",
  "Bevande",
  "Gelato"

]

const listaDom = document.getElementById('lista');

let i = 0
while( i < listaSpesa.length){
  listaDom.innerHTML += `<li>${listaSpesa[i]}</li>`
  i++
}