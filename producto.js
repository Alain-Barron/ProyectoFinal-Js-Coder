const contenedorProductoEncontrado = document.querySelector("#contenedor-producto-encontrado-id");
const contenedorLoader = document.querySelector('#loading-container-id')

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
            <form>
        <label class="p-producto" for="cantidad">Cantidad:</label>
        <select id="cantidad" name="cantidad">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </form>
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
    const selectCantidad = document.getElementById('cantidad');
selectCantidad.addEventListener('change', function() {
    const ValorSeleccionado = selectCantidad.value;
    console.log('Cantidad seleccionada:', ValorSeleccionado);
});
    
    contenedorLoader.classList.add("disabled")
})

const productosEnCarrito = []

function agregarAlCarrito(e){
    productosEnCarrito.push(productoLS);
    console.log("Producto agregado al carrito:", productoLS);
    console.log(productosEnCarrito)
}

document.addEventListener("click", (evento) => {
    const btnComprar = evento.target.closest(".button-container");
    if (btnComprar) {
        agregarAlCarrito();
        contenedorLoader.classList.remove("disabled")
        setTimeout(() => {
            contenedorLoader.classList.add("disabled")
        },1500)
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
        }, 2000); // 2000 milisegundos = 2 segundos

        
    }
});


