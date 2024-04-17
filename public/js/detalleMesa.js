window.addEventListener('load', () =>{
    categoriasSelect = document.querySelector('#categoriaSelect');
    productosList = document.querySelector('#productosList')

    categoriasSelect.addEventListener('change', () =>{
        const idCategoria = categoriasSelect.value;
        const productosElegidos = productos.filter(producto => producto.categoria_id == idCategoria);

        productosList.innerText = '';
        productosElegidos.forEach(producto => {
            // let opcion = document.createElement('option');
            // opcion.setAttribute = ('value', producto.id)
            // opcion.innerText = producto.nombre;
            // productosSelect.appendChild(opcion);
            const fila = document.createElement('tr');
            const nombreProducto = document.createElement('td');
            const idInput = document.createElement('input');
            const botonesCelda = document.createElement('td');
            const botonMas = document.createElement('button');
            const botonMenos = document.createElement('button');
            const contador = document.createElement('span');
            const cantidadInput = document.createElement('input');

            // cconfiguro mis elementos falopa escondidos desde los que capturo los datos dsp

            idInput.type = 'hidden';
            idInput.name = producto.nombre;
            idInput.value = producto.id;

            cantidadInput.type = 'hidden';
            cantidadInput.name = 'cantidad' + producto.id;
            cantidadInput.value = 0;


            nombreProducto.textContent = producto.nombre;
            botonMas.textContent = '+';
            botonMenos.textContent = '-';
            contador.textContent = '0';

            botonMas.addEventListener('click', (event) =>{
                event.preventDefault();
                let cantidad = parseInt(contador.textContent);
                contador.textContent = cantidad + 1;
                cantidadInput.value = cantidad + 1;
            })

            botonMenos.addEventListener('click', (event) =>{
                event.preventDefault();
                let cantidad = parseInt(contador.textContent);
                if (cantidad > 0){
                contador.textContent = cantidad -1;
                cantidadInput.value = cantidad -1;
                }
            })
            
            botonesCelda.appendChild(botonMenos);
            botonesCelda.appendChild(contador);
            botonesCelda.appendChild(botonMas);

            fila.appendChild(nombreProducto);
            fila.appendChild(idInput)
            fila.appendChild(botonesCelda);
            fila.appendChild(cantidadInput);
            productosList.appendChild(fila);

            
        });

    
    })
})