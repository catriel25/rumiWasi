window.addEventListener('load', () =>{
    const formularioEditarEliminar = document.getElementById('formulario-edicion-eliminar');
    const botonEditarCategoria = document.getElementById('boton-editar-categoria');
    const botonEliminarCategoria = document.getElementById('boton-eliminar-categoria');
    const categoriaEditarEliminar = document.getElementById('categoria-editar-eliminar');
    const categorias = document.querySelectorAll('.categorias-listado');


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
            //aca me quede
            categorias.forEach((categoria)=> {
                if(nombreCategoriaEditarEliminar.toUpperCase() == categoria.innerText){
                    event.preventDefault();
                    alert('Ya existe una categoría con ese nombre');
                    break;

                }
        
            })
            alert('Se modificó el nombre de la categoría');
                
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