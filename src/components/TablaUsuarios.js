import React from 'react'
import lapiz from '../images/pencil-edit.svg'
import reciclaje from '../images/reciclaje.svg'

export class TablaUsuarios extends React.Component {
    render(){
        const usuarios = this.props.usuarios;
        const filaUsuarios = usuarios.map(user => {
            return (
                <tr key={user._id} >
                    <td>{user.dni}</td>
                    <td>{user.nombre}</td>
                    <td>{user.apellido}</td>
                    <td>{user.rol}</td>
                    <td>{user.celular}</td>
                    <td>{user.email}</td>
                    <td>{user.ingreso}</td>
                    <td className="btnAgregarEliminar">
                        <button className="editarUsuario" type="button" onClick={() => this.props.onEditUser(user)} ><img src={lapiz} alt="lapiz" width="15px"/></button>
                        <button className="eliminarUsuario" type="button" onClick={() => this.props.onDeleteUser(user._id)}><img src={reciclaje} alt="basura" width="15px"/></button>
                    </td>
                </tr> 
            );
        });

        /* === === === === === === === === === === === === === */
        return (
                <table id="tablaUsuarios">
                    <thead className="textCenter">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Rol</th>
                            <th>Celular</th>
                            <th>E-mail</th>
                            <th>Ingreso</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tbodyUsuarios">
                        {filaUsuarios}
                    </tbody>
                </table>
        );
    }
    
}
    
    

export default TablaUsuarios

