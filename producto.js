const contenedorProductoEncontrado = document.querySelector("#contenedor-producto-encontrado-id");
const contenedorLoader = document.querySelector('#loading-container-id')
const carritoLogo = document.querySelector('#carrito-id')
const contenedorCarrito = document.querySelector('#contenedor-carrito-id')
const carritoNumero = document.querySelector('.carritoNumero')


function renderizarProducto(producto) {
    const { id, titulo, precio, imagen, idProducto } = producto;
    contenedorProductoEncontrado.innerHTML = `
    <div class="main-div-container">

    <div class="contenedor-padre-img">
        <div class="imagen-container">
            <img src="${"." + imagen}" alt="${titulo}" class="img-class" id="producto-imagen">
        </div>
    </div>
    
    
    <div class="detalle-container-aside">
    
        <div class="header-container-aside">
            <h3 class="h3-titulo-producto" id="producto-titulo">${titulo}</h3>
            <h2 class="h2-precio-producto" id="producto-precio">$${(precio.toLocaleString('es-ES'))}</h2>
    
    
            <h2 class="h2-cuotas-producto"> en 12x $${(precio / 12).toLocaleString('es-ES')}</h2>
    
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
        <div id="paypal-button-container"></div>

        <script src="https://www.paypal.com/sdk/js?client-id=AYiQSIhe7Fh_XwhIWD5vhv5EgF7SO7pj-XsyYCaLxQR6ShZk_myQCLyAV-6br_U3vDmRHaC6xP0SknXm"></script>
    </div>
    
    </div>
`;
}

const productoLS = JSON.parse(localStorage.getItem("producto-encontrado-key"))

document.addEventListener("DOMContentLoaded", () => {
    renderizarProducto(productoLS)
    contenedorLoader.classList.add("disabled")

})

const precioDOM = productoLS.precio


let productosEnCarrito = []
let total = 0

document.addEventListener("click", (evento) => {
    const btnComprar = evento.target.closest(".button-container");
    if (btnComprar) {
        // agregarAlCarrito();
        contenedorLoader.classList.remove("disabled");
        setTimeout(() => {
            contenedorLoader.classList.add("disabled");
        }, 1500);
        // Retrasa la ejecución de agregarAlCarrito() por 2000 milisegundos (2 segundos)
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
            const precioFinalFormateado = precioProducto.replace("$", "")


            // Crea el objeto infoProduct con el título del producto
            const infoProduct = {
                cantidad: 1,
                titulo: tituloProducto,
                precio: productoLS.precio,
            };

            productosEnCarrito = [...productosEnCarrito, infoProduct]

            total = (productosEnCarrito.length * infoProduct.precio)


            contenedorCarrito.innerHTML = `
            <div class="contenedorProductosCarrito">
                <p>${infoProduct.titulo}</p>
                <p>Precio: $${(infoProduct.precio.toLocaleString('es-ES'))}</p>
                <p>Cantidad: ${productosEnCarrito.length}</p>
                <p>Total: $${total.toLocaleString('es-ES')}</p>
            </div>
            `

            localStorage.setItem("infoProduct-key", JSON.stringify(infoProduct))
            localStorage.setItem("producto-en-carrito-key", JSON.stringify(productosEnCarrito))
            localStorage.setItem("carrito-total-key", JSON.stringify(total))

        }, 2000); // 2000 milisegundos = 2 segundos
    }
});

// Configuracion de la API de PayPal
paypal.Buttons({
    createOrder: function (data, actions) {
        // Configura el pedido y la cantidad a pagar
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: precioDOM
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        // Captura la aprobación del pago y muestra un mensaje
        return actions.order.capture().then(function (details) {
            alert('Pago completado por ' + details.payer.name.given_name);

        });
    }
}).render('#paypal-button-container');

