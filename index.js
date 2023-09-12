let dbProductos= [

    // TECNOLOGIA
    // TECNOLOGIA

    {
        id: "tecnologia",
        titulo: "Apple iPhone 13 (128 GB) - Azul medianoche",
        imagen: "../imgs/productos/tecnologia/iphone-13.webp",
        precio: 814999,
        idProducto: 1,
    },
    {
        id: "tecnologia",
        titulo: "Samsung Galaxy S23 8gb 256gb Cream",
        imagen: "./imgs/productos/tecnologia/samsung-s23.webp",
        precio: 553999
    },
    {
        id: "tecnologia",
        titulo: "Xiaomi Redmi Note 10 5G - Gris grafito - 128 GB - 4 GB",
        imagen: "./imgs/productos/tecnologia/xiaomi-10.webp",
        precio: 193899
    },
    {
        id: "tecnologia",
        titulo: "Motorola Moto G22 - Cosmic black - 128 GB - 4 GB",
        imagen: "./imgs/productos/tecnologia/moto-g20.webp",
        precio: 162157
    },
    {
        id: "tecnologia",
        titulo: "Celular Motorola Moto E13 64gb 2gb Ram Azul Turquesa",
        imagen: "./imgs/productos/tecnologia/moto-e13.webp",
        precio: 71999
    },

    // VEHICULOS 
    // VEHICULOS

    {
        id: "vehiculos",
        titulo: "Chevrolet Cruze 1.4 Premier Sedan",
        imagen: "./imgs/productos/vehiculos/1.webp",
        precio: 14686900
    },
    {
        id: "vehiculos",
        titulo: "Fiat Pulse 1.0 Impetus T3 Cvt 0km Full",
        imagen: "./imgs/productos/vehiculos/2.webp",
        precio: 3000000
    }, ,
    {
        id: "vehiculos",
        titulo: "Volkswagen Amarok 3.0 V6 Extreme",
        imagen: "./imgs/productos/vehiculos/3.webp",
        precio: 27850000
    },
    {
        id: "vehiculos",
        titulo: "Peugeot 208 1.6l Active Pack Tiptronic",
        imagen: "./imgs/productos/vehiculos/4.webp",
        precio: 10350000
    },
    {
        id: "vehiculos",
        titulo: "Nissan Sentra 2.0 Exclusive Mt Premium",
        imagen: "./imgs/productos/vehiculos/5.webp",
        precio: 21999999
    },


    //  HERRAMIENTAS
    // HERRAMIENTAS

    {
        id: "herramientas",
        titulo: "Maletín Portátil Set De Herramientas Lusqtoff 245 Pz",
        imagen: "./imgs/productos/herramientas/1.webp",
        precio: 103664
    },
    {
        id: "herramientas",
        titulo: "Taladro Atornillador Inalambrico 2 Baterias 12v + Kit 32 Acc",
        imagen: "./imgs/productos/herramientas/2.webp",
        precio: 37900
    },
    {
        id: "herramientas",
        titulo: "Soldadora Mig Alambre Flux Mascara Lusqtof Sml150",
        imagen: "./imgs/productos/herramientas/3.webp",
        precio: 97520
    },
    {
        id: "herramientas",
        titulo: "Hidrolavadora eléctrica Gamma 100 Blue Line G2508AR",
        imagen: "./imgs/productos/herramientas/4.webp",
        precio: 33299
    },
    {
        id: "herramientas",
        titulo: "Amoladora de banco Lüsqtoff AB-375 de 50 Hz 375 W 220 V",
        imagen: "./imgs/productos/herramientas/5.webp",
        precio: 27645
    },

    // DEPORTES Y FITNESS
    // DEPORTES Y FITNESS

    {
        id: "deportes",
        titulo: "Zapatillas Downshifter 12 Nike Oficial",
        imagen: "./imgs/productos/deportes/1.webp",
        precio: 45499
    },
    {
        id: "deportes",
        titulo: "Short De Baño Slim Men Topper Azul",
        imagen: "./imgs/productos/deportes/2.webp",
        precio: 7842
    },
    {
        id: "deportes",
        titulo: "Remera Termica Hombre Alpina Microfibra Dry Fit Manga Larga",
        imagen: "./imgs/productos/deportes/3.webp",
        precio: 5954
    },
    {
        id: "deportes",
        titulo: "3 Whey 100% De Spx (3 De 1080gr) +una Creatina 300 Gr",
        imagen: "./imgs/productos/deportes/4.webp",
        precio: 16480
    },
    {
        id: "deportes",
        titulo: "Kaddygolf Gorra Nike Hombre Legacy91 Tech Nueva Regulable",
        imagen: "./imgs/productos/deportes/5.webp",
        precio: 18000
    },

    // MODA 
    // MODA

    {
        id: "moda",
        titulo: "Canguro Dystopic Oversize De Algodon Mujer 47 Street",
        imagen: "./imgs/productos/moda/1.webp",
        precio: 44999
    },
    {
        id: "moda",
        titulo: "Pantalones Hombre Cargo Bolsillos Casuales Jogger Alpina",
        imagen: "./imgs/productos/moda/2.webp",
        precio: 7872
    },
    {
        id: "moda",
        titulo: "Remera 47 Drop De Algodon Mujer 47 Street",
        imagen: "./imgs/productos/moda/3.webp",
        precio: 18999
    },
    {
        id: "moda",
        titulo: "Conjunto Topper Hombre Negro Melange",
        imagen: "./imgs/productos/moda/4.webp",
        precio: 31879
    },
    {
        id: "moda",
        titulo: "Pantuflas Disney Mickey",
        imagen: "./imgs/productos/moda/5.webp",
        precio: 10800
    },

]

// localStorage.setItem("dbProductos-key", JSON.stringify(dbProductos))



const carrito = []

const categoriasContenedores = {
    tecnologia: "row-container-id-1",
    vehiculos: "row-container-id-2",
    herramientas: "row-container-id-3",
    deportes: "row-container-id-4",
    moda: "row-container-id-5"
};

function crearTemplate() {
    dbProductos.forEach((producto) => {
        const { id, titulo, precio, imagen, idProducto } = producto;
        let productoHTML = "";

        switch (id) {
            case "tecnologia":
            case "vehiculos":
            case "herramientas":
            case "deportes":
            case "moda":

                const contenedorId = categoriasContenedores[id];
                const contenedor = document.querySelector(`#${contenedorId}`);

                productoHTML = `
                <a class="link-producto" >
                <div class="div-padre btnVer"  id="${idProducto}"></div>
                <div class="producto-card">
                    <img src="${imagen}" alt="" class="producto-imagen">
                    <h3 class="producto-precio">$${precio}</h3>
                    <p class="producto-descripcion">${titulo}</p>
                </div>
            </a>
                `;

                contenedor.innerHTML += productoHTML;
                break;
        }
    });
}

crearTemplate();

document.addEventListener("click", (evento) => {
    const btnVer = document.querySelectorAll(".btnVer")
    btnVer.forEach((btn) => {

        if (evento.target == btn)
        {
            console.log("click")
            const id = evento.target.id
            const productoEncontrado = dbProductos.find((item) => item.idProducto == id)
            localStorage.setItem("producto-encontrado-key", JSON.stringify(productoEncontrado))  
            
            window.location.href = "./pages/producto.html"

        }
    })
})


// nombre = JSON.parse(localStorage.getItem("nombre-key"))

// const contenedorNombreCuenta = document.querySelector("#mi-cuenta-id")
// let nombreCuentaHTML = ""

// nombreCuentaHTML = `<a href="./pages/login.html" class="a-categorias"><i class="fa-regular fa-circle-user"></i>${nombre}</a>`;

// contenedorNombreCuenta.innerHTML =+ nombreCuentaHTML

// console.log(nombre)

