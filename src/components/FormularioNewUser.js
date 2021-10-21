import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

export default class FormularioNewUser extends React.Component {

    render() {
        const usuario = this.props.usuario;
        return (
        <div>
            <div>
                <button onClick={this.props.showFormNuevoUsuario} id="btnNuevoUsuario" title="Nuevo Usuario">Nuevo Usuario</button>
            </div>

            <div className="cssAgregarNuevoUsuario" hidden={!this.props.abrirContenido}>
                <p title="Cerrar" className="x" onClick={this.props.showFormNuevoUsuario}>&times;</p>
                <form onSubmit={this.props.onSaveUser}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label >DNI</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="dni" 
                            value={usuario.dni}
                            onChange={(evt) => this.props.onFormChange({ ...usuario, dni: evt.target.value })}
                            />
                        </div>

                        <div className="form-group col-md-6">
                        <label  value>Nombre</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={usuario.nombre}
                        onChange={(evt) => this.props.onFormChange({ ...usuario, nombre: evt.target.value })}
                        />
                        </div>

                        <div className="form-group col-md-6">
                        <label >Apellido</label>
                        <input 
                        id="Apellido" 
                        className="form-control" 
                        value={usuario.apellido}
                        onChange={(evt) => this.props.onFormChange({ ...usuario, apellido: evt.target.value })} 
                        /> 
                        
                        </div>
                        <div className="form-group col-md-6">
                        <label >Celular</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        id="celular" 
                        value={usuario.celular}
                        onChange={(evt) => this.props.onFormChange({ ...usuario, celular: evt.target.value })}
                        />
                        </div>

                    </div>

                    <div className="form-group">
                        <label >E-mail</label>
                        <input 
                        type="email"  
                        className="form-control" 
                        id="emaiil" 
                        placeholder="pepito@cualquieremail.com" 
                        value={usuario.email}
                        onChange={(evt) => this.props.onFormChange({ ...usuario, email: evt.target.value })}
                        />
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group col-md-4">
                        <label >Rol</label>
                        <input 
                        id="rol"  
                        className="form-control" 
                        value={usuario.rol}
                        onChange={(evt) => this.props.onFormChange({ ...usuario, rol: evt.target.value })}>
                        </input>
                        </div>

                        <div className="form-group col-md-6">
                            <label >Ingreso</label>
                            <input 
                            type="date"  
                            className="form-control" 
                            id="fecha" 
                            value={usuario.ingreso}
                            onChange={(evt) => this.props.onFormChange({ ...usuario, ingreso: evt.target.value })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" >
                            Verificar
                        </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" value={usuario._id === -1 ? 'Crear' : 'Editar'} >Agregar</button>
                    <input type="button" value="Limpiar" onClick={this.props.onClearUser} />
                </form>
            </div>
            
        </div>
    )
    }
}


