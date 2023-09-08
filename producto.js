dbProductos = JSON.parse(localStorage.getItem("dbProductos-key"))
console.log(dbProductos)

        // Encuentra el producto correspondiente en tu base de datos
        dbProductos.forEach((elemento) => {
            const { id, titulo, precio, imagen } = elemento;
            const producto = dbProductos.find((p) => p.id === "vehiculos");
            console.log(producto)
        })

