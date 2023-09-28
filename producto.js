const contenedorProductoEncontrado = document.querySelector("#contenedor-producto-encontrado-id");
const contenedorLoader = document.querySelector('#loading-container-id')
const carritoLogo = document.querySelector('#carrito-id')
const contenedorCarrito = document.querySelector('#contenedor-carrito-id')

function renderizarProducto(producto){
    const { id, titulo, precio, imagen, idProducto } = producto;
    contenedorProductoEncontrado.innerHTML = `
    <div class="main-div-container">

    <div class="contenedor-padre-img">
        <div class="imagen-container">
            <img src="${"."+imagen}" alt="${titulo}" class="img-class" id="producto-imagen">
        </div>
    </div>
    
    
    <div class="detalle-container-aside">
    
        <div class="header-container-aside">
            <h3 class="h3-titulo-producto" id="producto-titulo">${titulo}</h3>
            <h2 class="h2-precio-producto" id="producto-precio">$${(precio.toLocaleString('es-ES'))}</h2>
    
    
            <h2 class="h2-cuotas-producto"> en 12x $${(precio/12).toLocaleString('es-ES')}</h2>
    
        </div>
    
        <div class="body-container-aside">
            <p class="p-producto"><span class="green-span">Llega gratis</span> el viernes</p>
            <span class="green-span">Devolución gratis</span>
            <p class="p-devolucion">Tenés 30 días desde que lo recibís.</p>
            <p class="p-stock">Stock Disponible</p>
            
        </div>
        
        <div class="button-container">
            <button type="submit" class="andes-button andes-spinner__icon-base ui-pdp-action--primary andes-button--loud" id=":Rll8b6c5:" aria-disabled="false" formaction="https://www.mercadolibre.com.ar/gz/checkout/buy"><span class="andes-button__content">Comprar ahora</span></button>
        </div>
    </div>
    
    </div>
`;
}

const productoLS = JSON.parse(localStorage.getItem("producto-encontrado-key"))

document.addEventListener("DOMContentLoaded", () => {
    renderizarProducto(productoLS)
    contenedorLoader.classList.add("disabled")
})



// function agregarAlCarrito(e){
//     productosEnCarrito.push(productoLS);
//     console.log("Producto agregado al carrito:", productoLS);
//     console.log(productosEnCarrito)
// }


let productosEnCarrito = []

document.addEventListener("click", (evento) => {
    const btnComprar = evento.target.closest(".button-container");
    if (btnComprar) {
        // agregarAlCarrito();
        contenedorLoader.classList.remove("disabled");
        setTimeout(() => {
            contenedorLoader.classList.add("disabled");
        }, 1500);
        // Retrasar la ejecución de agregarAlCarrito() por 2000 milisegundos (2 segundos)
        setTimeout(() => {
            Toastify({
                text: "Se agregó correctamente al carrito",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "background-color: #3385ff;",
                },
            }).showToast();

            const tituloProducto = document.getElementById('producto-titulo').textContent;
            const precioProducto = document.getElementById('producto-precio').textContent;
            console.log('Título del producto:', tituloProducto);

            // Crear el objeto infoProduct con el título del producto
            const infoProduct = {
                cantidad: 1,
                titulo: tituloProducto,
                precio: precioProducto,
            };
            
            productosEnCarrito = [...productosEnCarrito, infoProduct]
            console.log(productosEnCarrito)

        }, 2000); // 2000 milisegundos = 2 segundos
    }
});


carritoLogo.addEventListener('click', (evento) => {
    evento.preventDefault();
    // Si el contenedor del carrito está oculto, muéstralo; de lo contrario, ocúltalo
    if (contenedorCarrito.style.display === 'none') {
        contenedorCarrito.style.display = 'block';
        // Aquí puedes agregar lógica para cargar y mostrar los productos del carrito
        // Puedes usar AJAX para obtener los datos del carrito y mostrarlos en el contenedor
    } else {
        contenedorCarrito.style.display = 'none';
    }
})