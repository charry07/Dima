import React from 'react'
import EditarUsuario  from './EditarUsuario'
import EliminarUsuario from './EliminarUsuario'

function TablaUsuarios() {
    return (
        <div>
            <table id="tablaUsuarios">
                <thead class="textCenter">
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rol</th>
                        <th>Especialidad</th>
                        <th>Celular</th>
                        <th>E-mail</th>
                        <th>Ingreso</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="tbodyUsuarios">
                    <tr>
                        <td>1035918779</td>
                        <td>Charry07</td>
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
                    <tr>
                        <td>1035918779</td>
                        <td>Charry07</td>
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
                    
                </tbody>
            </table>
        </div>
    )
}

export default TablaUsuarios

