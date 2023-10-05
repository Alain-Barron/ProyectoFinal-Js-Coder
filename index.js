const CarritoConProductos = JSON.parse(localStorage.getItem("producto-en-carrito-key"))
const infoProduct = JSON.parse(localStorage.getItem("infoProduct-key"))
const totalcarrito = JSON.parse(localStorage.getItem("carrito-total-key"))
const contenedorDeCarrito = document.querySelector('#contenedor-carrito-id')
const carritoNumeroNav = document.querySelector('#carritoNumero')
const carritoLogoNav = document.querySelector('#carrito-id')


console.log(infoProduct)

function RenderizarCarrito() {
    // Limpiar el contenido del contenedor
    contenedorDeCarrito.innerHTML = '';

    // Iterar sobre la lista de productos en el carrito
    productosEnCarrito.forEach((producto) => {
        contenedorDeCarrito.innerHTML += `
            <div class="contenedorProductosCarrito">
                <p>${producto.titulo}</p>
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: 1</p> <!-- Esto puede variar según tu lógica -->
                <p>Total: $${producto.precio}</p>
            </div>
        `;
    });

    // Actualizar el número de productos en el carrito
    if(window.location.pathname.includes("index")){
        carritoNumeroNav.innerHTML = productosEnCarrito.length;
    }

}
// Al cargar la página
window.addEventListener('load', () => {
    // Recuperar datos del localStorage si existen
    const storedProductosEnCarrito = JSON.parse(localStorage.getItem("producto-en-carrito-key"));
    const storedTotal = JSON.parse(localStorage.getItem("carrito-total-key"));

    if (storedProductosEnCarrito) {
        productosEnCarrito = storedProductosEnCarrito;
        RenderizarCarrito();
    }

    if (storedTotal) {
        total = storedTotal;
    }

    // Luego, puedes llamar a la función para renderizar el carrito con los datos existentes.

    
});



function AgregarProductoAlCarrito(producto) {
    // Agrega el producto a la lista existente
    productosEnCarrito.push(producto);
    
    // Actualiza el total del carrito
    total += producto.precio;

    // Actualiza el localStorage
    localStorage.setItem("producto-en-carrito-key", JSON.stringify(productosEnCarrito));
    localStorage.setItem("carrito-total-key", JSON.stringify(total));

    // Llama a la función para renderizar el carrito
    RenderizarCarrito();
}
if(window.location.pathname.includes("index")){
    carritoLogoNav.addEventListener('click', (evento) => {
    
        evento.preventDefault();
        
        // Si el contenedor del carrito está oculto, muéstralo; de lo contrario, ocúltalo
        if (contenedorDeCarrito.style.display === 'none') {
            contenedorDeCarrito.style.display = 'block';
            // Aquí puedes agregar lógica para cargar y mostrar los productos del carrito
            // Puedes usar AJAX para obtener los datos del carrito y mostrarlos en el contenedor
        } else {
            contenedorDeCarrito.style.display = 'none';
        }
    })
}




// Función para limpiar el carrito
function LimpiarCarrito() {
    // Vaciar el arreglo de productos en el carrito
    productosEnCarrito = [];
    
    // Resetear el total del carrito a 0
    total = 0;

    // Actualizar el localStorage
    localStorage.setItem("producto-en-carrito-key", JSON.stringify(productosEnCarrito));
    localStorage.setItem("carrito-total-key", JSON.stringify(total));

    // Volver a renderizar el carrito (puede ser opcional dependiendo de tu diseño)
    RenderizarCarrito();
}




// document.addEventListener("DOMContentLoaded", () => {
//     RenderizarCarrito()
// })

// function RenderizarCarrito(){
//     contenedorDeCarrito.innerHTML = `
//     <div class="contenedorProductosCarrito">
//         <p>${infoProduct.titulo}</p>
//         <p>Precio: $${infoProduct.precio}</p>
//         <p>Cantidad: ${CarritoConProductos.length}</p>
//         <p>Total: $${totalcarrito}</p>
//     </div>
//     `
//     carritoNumeroNav.innerHTML = `
//     <p>${CarritoConProductos.length}</p>
//     `
//     carritoLogoNav.addEventListener('click', (evento) => {
    
//         evento.preventDefault();
        
//         // Si el contenedor del carrito está oculto, muéstralo; de lo contrario, ocúltalo
//         if (contenedorDeCarrito.style.display === 'none') {
//             contenedorDeCarrito.style.display = 'block';
//             // Aquí puedes agregar lógica para cargar y mostrar los productos del carrito
//             // Puedes usar AJAX para obtener los datos del carrito y mostrarlos en el contenedor
//         } else {
//             contenedorDeCarrito.style.display = 'none';
//         }
//     })
// }

let dbProductos= [

    // TECNOLOGIA
    // TECNOLOGIA

    {
        categoria: "tecnologia",
        titulo: "Apple iPhone 13 (128 GB) - Azul medianoche",
        imagen: "./imgs/productos/tecnologia/iphone-13.webp",
        precio: 814999,
        idProducto: 1,
    },
    {
        categoria: "tecnologia",
        titulo: "Samsung Galaxy S23 8gb 256gb Cream",
        imagen: "./imgs/productos/tecnologia/samsung-s23.webp",
        precio: 553999,
        idProducto: 2,
        
    },
    {
        categoria: "tecnologia",
        titulo: "Xiaomi Redmi Note 10 5G - Gris grafito - 128 GB - 4 GB",
        imagen: "./imgs/productos/tecnologia/xiaomi-10.webp",
        precio: 193899,
        idProducto: 3,
    },
    {
        categoria: "tecnologia",
        titulo: "Motorola Moto G22 - Cosmic black - 128 GB - 4 GB",
        imagen: "./imgs/productos/tecnologia/moto-g20.webp",
        precio: 162157,
        idProducto: 4,
    },
    {
        categoria: "tecnologia",
        titulo: "Celular Motorola Moto E13 64gb 2gb Ram Azul Turquesa",
        imagen: "./imgs/productos/tecnologia/moto-e13.webp",
        precio: 71999,
        idProducto: 5,
    },

    // VEHICULOS 
    // VEHICULOS

    {
        categoria: "vehiculos",
        titulo: "Chevrolet Cruze 1.4 Premier Sedan",
        imagen: "./imgs/productos/vehiculos/1.webp",
        precio: 14686900,
        idProducto: 6,
    },
    {
        categoria: "vehiculos",
        titulo: "Fiat Pulse 1.0 Impetus T3 Cvt 0km Full",
        imagen: "./imgs/productos/vehiculos/2.webp",
        precio: 3000000,
        idProducto: 7,
    },
    {
        categoria: "vehiculos",
        titulo: "Volkswagen Amarok 3.0 V6 Extreme",
        imagen: "./imgs/productos/vehiculos/3.webp",
        precio: 27850000,
        idProducto: 8,
    },
    {
        categoria: "vehiculos",
        titulo: "Peugeot 208 1.6l Active Pack Tiptronic",
        imagen: "./imgs/productos/vehiculos/4.webp",
        precio: 10350000,
        idProducto: 9,
    },
    {
        categoria: "vehiculos",
        titulo: "Nissan Sentra 2.0 Exclusive Mt Premium",
        imagen: "./imgs/productos/vehiculos/5.webp",
        precio: 21999999,
        idProducto: 10,
    },


    //  HERRAMIENTAS
    // HERRAMIENTAS

    {
        categoria: "herramientas",
        titulo: "Maletín Portátil Set De Herramientas Lusqtoff 245 Pz",
        imagen: "./imgs/productos/herramientas/1.webp",
        precio: 103664,
        idProducto: 11,
    },
    {
        categoria: "herramientas",
        titulo: "Taladro Atornillador Inalambrico 2 Baterias 12v + Kit 32 Acc",
        imagen: "./imgs/productos/herramientas/2.webp",
        precio: 37900,
        idProducto: 12,
    },
    {
        categoria: "herramientas",
        titulo: "Soldadora Mig Alambre Flux Mascara Lusqtof Sml150",
        imagen: "./imgs/productos/herramientas/3.webp",
        precio: 97520,
        idProducto: 13,
    },
    {
        categoria: "herramientas",
        titulo: "Hidrolavadora eléctrica Gamma 100 Blue Line G2508AR",
        imagen: "./imgs/productos/herramientas/4.webp",
        precio: 33299,
        idProducto: 14,
    },
    {
        categoria: "herramientas",
        titulo: "Amoladora de banco Lüsqtoff AB-375 de 50 Hz 375 W 220 V",
        imagen: "./imgs/productos/herramientas/5.webp",
        precio: 27645,
        idProducto: 15,
    },

    // DEPORTES Y FITNESS
    // DEPORTES Y FITNESS

    {
        categoria: "deportes",
        titulo: "Zapatillas Downshifter 12 Nike Oficial",
        imagen: "./imgs/productos/deportes/1.webp",
        precio: 45499,
        idProducto: 16,
    },
    {
        categoria: "deportes",
        titulo: "Short De Baño Slim Men Topper Azul",
        imagen: "./imgs/productos/deportes/2.webp",
        precio: 7842,
        idProducto: 17,
    },
    {
        categoria: "deportes",
        titulo: "Remera Termica Hombre Alpina Microfibra Dry Fit Manga Larga",
        imagen: "./imgs/productos/deportes/3.webp",
        precio: 5954,
        idProducto: 18,
    },
    {
        categoria: "deportes",
        titulo: "3 Whey 100% De Spx (3 De 1080gr) +una Creatina 300 Gr",
        imagen: "./imgs/productos/deportes/4.webp",
        precio: 16480,
        idProducto: 19,
    },
    {
        categoria: "deportes",
        titulo: "Kaddygolf Gorra Nike Hombre Legacy91 Tech Nueva Regulable",
        imagen: "./imgs/productos/deportes/5.webp",
        precio: 18000,
        idProducto: 20,
    },

    // MODA 
    // MODA

    {
        categoria: "moda",
        titulo: "Canguro Dystopic Oversize De Algodon Mujer 47 Street",
        imagen: "./imgs/productos/moda/1.webp",
        precio: 44999,
        idProducto: 21,
    },
    {
        categoria: "moda",
        titulo: "Pantalones Hombre Cargo Bolsillos Casuales Jogger Alpina",
        imagen: "./imgs/productos/moda/2.webp",
        precio: 7872,
        idProducto: 22,
    },
    {
        categoria: "moda",
        titulo: "Remera 47 Drop De Algodon Mujer 47 Street",
        imagen: "./imgs/productos/moda/3.webp",
        precio: 18999,
        idProducto: 23,
    },
    {
        categoria: "moda",
        titulo: "Conjunto Topper Hombre Negro Melange",
        imagen: "./imgs/productos/moda/4.webp",
        precio: 31879,
        idProducto: 24,
    },
    {
        categoria: "moda",
        titulo: "Pantuflas Disney Mickey",
        imagen: "./imgs/productos/moda/5.webp",
        precio: 10800,
        idProducto: 25,
    },

]

localStorage.setItem("dbProductos-key", JSON.stringify(dbProductos))


const categoriasContenedores = {
    tecnologia: "row-container-id-1",
    vehiculos: "row-container-id-2",
    herramientas: "row-container-id-3",
    deportes: "row-container-id-4",
    moda: "row-container-id-5"
};



function crearTemplate() {
    
    dbProductos.forEach((producto) => {
        const { categoria, titulo, precio, imagen, idProducto } = producto;
        let productoHTML = "";

        switch (categoria) {
            case "tecnologia":
            case "vehiculos":
            case "herramientas":
            case "deportes":
            case "moda":

                const contenedorId = categoriasContenedores[categoria];
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

if(window.location.pathname.includes("index")){
    crearTemplate();
}

if(window.location.href === 'https://proyecto-final-js-coder.vercel.app/'){
    if (localStorage.getItem("nombre-key") !== null) {

    } else {
        Swal.fire('Primero registrate y crea un usuario.\n Podras hacerlo arriba a la derecha, en la barra de navegacion');
    }
}



const MiCuentaContainers = document.querySelectorAll('p.miCuenta');
const nombreCuenta = JSON.parse(localStorage.getItem("nombre-key"));

if (nombreCuenta !== null && nombreCuenta !== undefined) {
    MiCuentaContainers.forEach(function(miCuenta) {
        miCuenta.innerHTML = nombreCuenta;
    });
} else {
    MiCuentaContainers.forEach(function(miCuenta) {
        miCuenta.innerHTML = "Registrate";
    });
}

const limpiarCarritoBtn = document.getElementById('limpiarCarritoBtn');
if(window.location.pathname.includes("index")){
    limpiarCarritoBtn.addEventListener('click', LimpiarCarrito);
}
