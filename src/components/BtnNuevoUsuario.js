import React from 'react'
import FormularioNuevoUsuario from './FormularioNuevoUsuario';
import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";

function BtnNuevoUsuario() {
    const  [AgregarNuevoUsuario, setAgregarNuevoUsuario] = useState(false);
    const showAgregarNuevoUsuario = () => setAgregarNuevoUsuario(!AgregarNuevoUsuario);

    return (
        <>
            <div>
                <button onClick={showAgregarNuevoUsuario} id="btnNuevoUsuario" title="Nuevo Usuario">Nuevo Usuario</button>
            </div>
            <div className={AgregarNuevoUsuario ? 'cssAgregarNuevoUsuario active' : 'cssAgregarNuevoUsuario' }>
                <form id="fanu" >
                    <p title="Cerrar" class="x" onClick={showAgregarNuevoUsuario}>&times;</p>
                    <FormularioNuevoUsuario />
                </form>
            </div>
        </>
    )
}

export default BtnNuevoUsuario
