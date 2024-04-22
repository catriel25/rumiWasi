window.addEventListener('load', () =>{
    const formularioEditarEliminar = document.getElementById('formulario-edicion-eliminar');
    const botonEditarCategoria = document.getElementById('boton-editar-categoria');
    const botonEliminarCategoria = document.getElementById('boton-eliminar-categoria');
    const botonAgregarCategoria = document.getElementById('boton-agregar-categoria')
    const botonAgregarProducto = document.getElementById('boton-agregar-producto')
    const categoriaEditarEliminar = document.getElementById('categoria-editar-eliminar');
 

    botonAgregarCategoria.addEventListener('click', (event) =>{
        let opcion = document.getElementById('categoria-a-agregar').value;
        let existe = false;
        categorias.forEach((categoria)=> {
            if(opcion.toUpperCase() == categoria.nombre){
                existe = true;
                alert('Ya existe una categoría con ese nombre');
                
            }
    
        })
        if(existe){
            event.preventDefault();

        
        }
    })
    
    botonAgregarProducto.addEventListener('click', (event) =>{
        let opcion = document.getElementById('producto-a-agregar').value;
        let existe = false;
        productos.forEach((producto)=> {
            if(opcion.toUpperCase() == producto.nombre.toUpperCase()){
                existe = true;
                alert('Ya existe un producto con ese nombre');
                
            }
    
        })
        if(existe){
            event.preventDefault();

        
        }
    })
        

    let nombreCategoriaEditarEliminar = "";

    categoriaEditarEliminar.addEventListener('change', ()=>{
        
        let opcion = categoriaEditarEliminar.options[categoriaEditarEliminar.selectedIndex]
        nombreCategoriaEditarEliminar = opcion.innerText;
        
    })

    botonEditarCategoria.addEventListener('click', (event) => {
        formularioEditarEliminar.action = '/carta/categoria/update?_method=PUT';
        let confirmación = confirm('¿Estás seguro que quieres editar el nombre de la categoría ' + nombreCategoriaEditarEliminar + '?')

        if(!confirmación){
            event.preventDefault();

        }
        else{
            let existe = false;
            categorias.forEach((categoria)=> {
                if(nombreCategoriaEditarEliminar.toUpperCase() == categoria.nombre){
                    existe = true;
                    alert('Ya existe una categoría con ese nombre');
                    
                }
        
            })
            if(existe){
                event.preventDefault();
            }
            else{
                alert('Se modificó el nombre de la categoría');
            }
            
                
        }
    })

    botonEliminarCategoria.addEventListener('click', (event) => {
        formularioEditarEliminar.action = '/carta/categoria/delete?_method=DELETE';
        let confirmación = confirm('¿Estás seguro que quieres eliminar la categoría ' + nombreCategoriaEditarEliminar + '?\nRecuerde que al eliminar la categoría se eliminarán también todos los productos de la carta asociados a ella.')

        if(!confirmación){
            event.preventDefault();

        }
        else{
            alert('Se eliminó la categoría');
        }
    })



})