import React from 'react'
import EditarUsuario  from './EditarUsuario'
import EliminarUsuario from './EliminarUsuario'

export class TablaUsuarios extends React.Component {
    render(){
        const filaUsuarios = this.props.datosUsuarios.map(user => {
            return (
                <tr key={user.id} >
                    
                    <td>{user.id}</td>
                    <td>{user.nombre}</td>
                    <td>{user.apellido}</td>
                    <td>{user.rol}</td>
                    <td>{user.especialidad}</td>
                    <td>{user.celular}</td>
                    <td>{user.email}</td>
                    <td>{user.ingreso}</td>
                    <td className="btnAgregarEliminar">
                        <EditarUsuario/>
                        <EliminarUsuario/>
                    </td>

                </tr> 
            );
        });

        /* === === === === === === === === === === === === === */
        return (
            <div>
                <table id="tablaUsuarios">
                    <thead class="textCenter">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Rol</th>
                            <th>Especialidad</th>
                            <th>Celular</th>
                            <th>E-mail</th>
                            <th>Ingreso</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyUsuarios">
                        <tr>
                            <td>1035918779</td>
                            <td>Anderson</td>
                            <td>Charry</td>
                            <td>Administrador</td>
                            <td>N/A</td>
                            <td>3147781832</td>
                            <td>charry072013@gmail.com</td>
                            <td>28/09/2021</td>
                            <td className="btnAgregarEliminar">
                                <EditarUsuario/>
                                <EliminarUsuario/>
                            </td>
                        </tr>

                        {filaUsuarios}
                        
                    </tbody>
                </table>
            </div>
        );
    }
    
}
    
    

export default TablaUsuarios

