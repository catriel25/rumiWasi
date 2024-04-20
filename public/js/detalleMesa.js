window.addEventListener('load', () =>{
    let categoriasSelect = document.querySelector('#categoriaSelect');
    let productosList = document.querySelector('#productosList')
    let datosCantidad = document.querySelectorAll('.cantidad-productos');
    let botonBorrarMesa = document.getElementById('boton-eliminar-mesa');
    let botonCerrarMesa = document.getElementById('boton-cerrar-mesa');

    //generación dinámica de las opciones de productos a partir de la categoria
    categoriasSelect.addEventListener('change', () =>{
        const idCategoria = categoriasSelect.value;
        const productosElegidos = productos.filter(producto => producto.categoria_id == idCategoria);

        productosList.innerText = '';
        productosElegidos.forEach(producto => {
            const fila = document.createElement('tr');
            const nombreProducto = document.createElement('td');
            const idInput = document.createElement('input');
            const botonesCelda = document.createElement('td');
            const botonMas = document.createElement('button');
            const botonMenos = document.createElement('button');
            const contador = document.createElement('span');
            

            // cconfiguro mis elementos falopa escondidos desde los que capturo los datos dsp
            
            idInput.type = 'hidden';
            idInput.name = producto.id;
            idInput.value = 0;


            nombreProducto.textContent = producto.nombre;
            botonMas.textContent = '+';
            botonMenos.textContent = '-';
            contador.textContent = '0';

            botonMas.addEventListener('click', (event) =>{
                event.preventDefault();
                let cantidad = parseInt(contador.textContent);
                contador.textContent = cantidad + 1;
                idInput.value = cantidad + 1;
            })

            botonMenos.addEventListener('click', (event) =>{
                event.preventDefault();
                let cantidad = parseInt(contador.textContent);
                if (cantidad > 0){
                contador.textContent = cantidad -1;
                idInput.value = cantidad -1;
                }
            })
            
            botonesCelda.appendChild(botonMenos);
            botonesCelda.appendChild(contador);
            botonesCelda.appendChild(botonMas);

            fila.appendChild(nombreProducto);
            fila.appendChild(idInput)
            fila.appendChild(botonesCelda);
            productosList.appendChild(fila);

            
        });
    
    })
    //generación de los botones que permiten editar de forma dinamica el pedido activo
    datosCantidad.forEach((dato, i)=>{
        let cantidad = parseInt(dato.innerText)
        const botonMas = document.createElement('button');
        const botonMenos = document.createElement('button');
        const cantidadInput = document.createElement('input');
        const contador = document.createElement('span');
        dato.innerText = '';
        contador.textContent = cantidad

        cantidadInput.type = 'hidden';
        cantidadInput.name = i;
        cantidadInput.value = cantidad;
        
        botonMas.textContent = '+';
        botonMenos.textContent = '-';
        let cantidadOriginal = cantidad
        botonMas.addEventListener('click', (event) =>{
            event.preventDefault();
            cantidad = cantidad + 1;
            cantidadInput.value = cantidad;
            contador.textContent = cantidad;
            if(cantidad > cantidadOriginal){
                contador.style.color = 'green';
            }
            
        })
        botonMenos.addEventListener('click', (event) =>{
            event.preventDefault();
            if(cantidad > 0){
                cantidad = cantidad - 1;
                cantidadInput.value = cantidad;
                contador.textContent = cantidad;
                if(cantidad < cantidadOriginal){
                    contador.style.color = 'red';
                }
            }
        })

        dato.appendChild(botonMenos);
        dato.appendChild(contador);
        dato.appendChild(cantidadInput);
        dato.appendChild(botonMas);

        
        
    })
    //Lógica de confirmación del boton para eliminar la mesa
    botonBorrarMesa.addEventListener('click', (event)=>{
        let confirmación = confirm('Si confirmas se borrará la mesa y cualquier pedido que contenga')

        if(!confirmación){
            event.preventDefault();

        }
        else{
            alert('La mesa fue eliminada');
        }
    })

    //Lógica de confirmación del boton para cerrar la mesa
    botonCerrarMesa.addEventListener('click', (event)=>{
        let confirmación = confirm('Antes de cerrar la mesa, controle que el pedido sea correcto.\nSi desea continuar haga click en aceptar.')

        if(!confirmación){
            event.preventDefault();

        }
        else{
            alert('Se cerró la mesa');
        }
    })



})