import React from 'react'
import lapiz from '../images/pencil-edit.svg'
import {useState} from 'react'
import FormularioNuevoUsuario from './FormularioNuevoUsuario'

function EditarUsuario() {
    const  [EditarUsuario, setEditarUsuario] = useState(false);
    const showEditarUsuario = () => setEditarUsuario(!EditarUsuario);

    return (
        <>
            <button onClick={showEditarUsuario} className="editarUsuario"><img src={lapiz} alt="lapiz" width="15px"/></button>
            <div id="fanu" className={EditarUsuario ? 'cssAgregarNuevoUsuario active' : 'cssAgregarNuevoUsuario'}>
                <a href="./index.html" title="Cerrar" className="x" onClick={showEditarUsuario}>&times;</a>
                <FormularioNuevoUsuario/>
            </div>
            
        </>
    )
}

export default EditarUsuario
