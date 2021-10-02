import React from 'react'
import lapiz from '../images/pencil-edit.svg'
import {useState} from 'react'
import FormularioNuevoUsuario from './FormularioNuevoUsuario'

function EditarUsuario() {
    const  [EditarUsuario, setEditarUsuario] = useState(false);
    const showEditarUsuario = () => setEditarUsuario(!EditarUsuario);

    return (
        <>
            <div>
                <button onClick={showEditarUsuario} className="editarUsuario"><img src={lapiz} alt="lapiz" width="15px"/></button>
            </div>
            <div className={EditarUsuario ? 'cssAgregarNuevoUsuario active' : 'cssAgregarNuevoUsuario' }>
                <form id="fanu" >
                    <a href="#" title="Cerrar" class="x" onClick={showEditarUsuario}>&times;</a>
                    <FormularioNuevoUsuario/>
                </form>
            </div>
        </>
    )
}

export default EditarUsuario
