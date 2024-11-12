// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const div = document.getElementById("lista-de-productos") // elimina elementByClss y agrega #, renombra variable a div
const input = document.querySelector('.input'); // elimina signo de pesos y renombra a input

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  div.appendChild(d)// elimina nombre li
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  

function displayProductos() {
  
  while (div.firstChild) {
        div.removeChild(div.firstChild);
      }

  const texto = input.value;
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var p = document.createElement("p") // renombra a p
    p.classList.add("titulo")
    p.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(p);
    d.appendChild(imagen)
  
    div.appendChild(d);
  }
}

const botonDeFiltro = document.querySelector(".btn-filtro");

botonDeFiltro.addEventListener('click', displayProductos);


