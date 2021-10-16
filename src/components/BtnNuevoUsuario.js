import React from 'react'
import FormularioNuevoUsuario from './FormularioNuevoUsuario';
import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";

function BtnNuevoUsuario() {
    const  [AgregarNuevoUsuario, setAgregarNuevoUsuario] = useState(false);
    const showAgregarNuevoUsuario = () => setAgregarNuevoUsuario(!AgregarNuevoUsuario);
    
    // const usuario = this.props.usuario;
    return (
        <div>
            <div>
                <button onClick={showAgregarNuevoUsuario} id="btnNuevoUsuario" title="Nuevo Usuario">Nuevo Usuario</button>
            </div>
            
            <div id="fanu" className={AgregarNuevoUsuario ? 'cssAgregarNuevoUsuario active' : 'cssAgregarNuevoUsuario'}>
                <p title="Cerrar" className="x" onClick={showAgregarNuevoUsuario}>&times;</p>
                    
                <FormularioNuevoUsuario 
                    // usuario={this.state.selectedUsuario}
                    // onFormChange={this.onFormChange}
                    // onClearUser={this.onClearUser}
                    // onSaveUser={this.onSaveUser}
                    />
            </div>
        </div>
    )
}

export default BtnNuevoUsuario
