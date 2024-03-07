//Arreglo de datos principal
let products = [
    { nombre: 'Whisky Escocés', marca: 'Johnnie Walker', categoria: 'Licor', volumen: '750 ml', gradoAlcoholico: 40, precio: 25000, cantidad: 15 },
    { nombre: 'Vodka', marca: 'Absolut', categoria: 'Licor', volumen: '700 ml', gradoAlcoholico: 40, precio: 16950, cantidad: 20 },
    { nombre: 'Vino Tinto', marca: 'Concha y Toro', categoria: 'Vino', volumen: '750 ml', gradoAlcoholico: 13, precio: 7500, cantidad: 30 },
    { nombre: 'Cerveza IPA', marca: 'Stone Brewing', categoria: 'Cerveza', volumen: '355 ml', gradoAlcoholico: 6.9, precio: 5000, cantidad: 50 },
    { nombre: 'Ron', marca: 'Havana Club', categoria: 'Licor', volumen: '700 ml', gradoAlcoholico: 40, precio: 12000, cantidad: 25 },
    { nombre: 'Ginebra', marca: 'Bombay Sapphire', categoria: 'Licor', volumen: '750 ml', gradoAlcoholico: 47, precio: 17000, cantidad: 18 },
    { nombre: 'Tequila', marca: 'Patrón', categoria: 'Licor', volumen: '750 ml', gradoAlcoholico: 40, precio: 25000, cantidad: 22 },
    { nombre: 'Champán', marca: 'Moët & Chandon', categoria: 'Vino Espumoso', volumen: '750 ml', gradoAlcoholico: 12, precio: 20000, cantidad: 12 },
    { nombre: 'Sidra', marca: 'Strongbow', categoria: 'Cerveza de Sidra', volumen: '500 ml', gradoAlcoholico: 5, precio: 5000, cantidad: 40 },
    { nombre: 'Licor de Café', marca: 'Kahlúa', categoria: 'Licor', volumen: '750 ml', gradoAlcoholico: 20, precio: 18000, cantidad: 15 }
];

function initComps() {
  const cont = document.getElementById("content");
  cont.innerHTML = "";
  products.forEach((sProduct) => {
    const div = document.createElement("div");
    div.className = "productShow"
    const markName = document.createElement("h3");
    const butt = document.createElement("button");
    const nL = document.createElement("br");
    const icon = document.createElement('img');
    icon.innerHTML = '<img src="Img/1948-Johnnie-Walker-Red-1-lt.jpg" alt="">';
    markName.innerText = sProduct.nombre + " " + sProduct.marca;
    div.appendChild(markName);
    div.appendChild(nL);
    div.appendChild(icon);
    butt.addEventListener("click", () => {
      console.log("funciona");
    });
    butt.innerText = "Agregar al carro";
    div.appendChild(nL);
    div.appendChild(butt);
    console.log(div);

    cont.appendChild(div);
  });
}


initComps();
