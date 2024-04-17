window.addEventListener('load', () =>{
    categoriasSelect = document.querySelector('#categoriaSelect');
    productosSelect = document.querySelector('#productoElegido')

    categoriasSelect.addEventListener('change', () =>{
        let idCategoria = categoriasSelect.value;
        let productosElegidos = [];
        productos.forEach(producto => {
            if(producto.categoria_id == idCategoria)
                productosElegidos.push(producto);
        });
        productosElegidos.forEach(producto => {
            let opcion = document.createElement('option');
            opcion.innerText = producto.nombre;
            opcion.value = producto.id;
            productosSelect.appendChild(opcion);
        });

    
    })
})