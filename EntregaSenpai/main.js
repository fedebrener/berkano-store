function crearTarjetaProducto(productoACrear) {
    const contenedorDiv = document.createElement("div");
    const imagenImg = document.createElement("img");
    const tituloH3 = document.createElement("h3");
    const precioP = document.createElement("p");
    const colorP = document.createElement("p");
    const anadirB = document.createElement("button")

    tituloH3.textContent = productoACrear.nombre;
    precioP.textContent = "$ " + productoACrear.precio;
    colorP.textContent = "Color: " + productoACrear.color;
    imagenImg.src = productoACrear.imagen;
    anadirB.textContent = productoACrear.boton;

    imagenImg.classList.add("imagen-producto");

    contenedorDiv.appendChild(imagenImg);
    contenedorDiv.appendChild(tituloH3);
    contenedorDiv.appendChild(colorP);
    contenedorDiv.appendChild(precioP);
    contenedorDiv.appendChild(anadirB);

    contenedorDiv.classList.add("tarjeta-producto");

    const miBody = document.getElementsByClassName("catalogo-productos");
    miBody[0].appendChild(contenedorDiv);
}

const listaDeProductos = [
    {
        id: 1,
        nombre: "Remera Tulum",
        precio: 690,
        color: "Rosa",
        imagen: "./img/productos/remera1.jpg",
        boton: "Ver producto",
    },
    {
        id: 2,
        nombre: "Jean Blue Denim",
        precio: 1890,
        color: "Azul",
        imagen: "./img/productos/jean2.jpg",
        boton: "Ver producto",
    },
    {
        id: 3,
        nombre: "Deportivo Cargo",
        precio: 1290,
        color: "Gris",
        imagen: "./img/productos/deportivo3.jpg",
        boton: "Ver producto",
    },
    {
        id: 4,
        nombre: "Deportivo Zenith",
        precio: 1290,
        color: "Salmon",
        imagen: "./img/productos/deportivo2.jpg",
        boton: "Ver producto",
    },
    {
        id: 5,
        nombre: "Jean Black Denim",
        precio: 1890,
        color: "Negro",
        imagen: "./img/productos/jean3.jpg",
        boton: "Ver producto",
    },
    {
        id: 6,
        nombre: "Remera Tulum",
        precio: 690,
        color: "Celeste",
        imagen: "./img/productos/remera2.jpg",
        boton: "Ver producto",
    },
    {
        id: 7,
        nombre: "Jean Venice",
        precio: 1890,
        color: "Gris",
        imagen: "./img/productos/jean1.jpg",
        boton: "Ver producto",
    },
    {
        id: 8,
        nombre: "Remera Tulum",
        precio: 690,
        color: "Blanco",
        imagen: "./img/productos/remera3.jpg",
        boton: "Ver producto",
    },
    {
        id: 9,
        nombre: "Deportivo Malto",
        precio: 1290,
        color: "Negro",
        imagen: "./img/productos/deportivo1.jpg",
        boton: "Ver producto",
    },
];

listaDeProductos.map(function (productoDeLaLista) {
    crearTarjetaProducto(productoDeLaLista);
});
