import './styles/App.css';
import React from 'react';

// importar mis componentes
import FormularioNewUser from './components/FormularioNewUser'
import TablaUsuarios from './components/TablaUsuarios'
import Cabezera from './components/Cabezera'
import BarraBusqueda from './components/BarraBusqueda';
import Footer from './components/Footer'
import axios from 'axios';



export class App extends React.Component {
  constructor(props){
    super(props);
    this.URL_datosUsuarios = 'http://localhost:5000/usuarios'; /* mis datos en JSON*/
    this.emptyUsuario = { _id: -1 , dni: '', nombre: '', apellido: '', rol: '', celular: '', email: '' , ingreso: ''};
    this.state = {
      usuarios: [],
      selectedUsuario: this.emptyUsuario,
      abrirContenido: false
    };

    this.onFormChange = this.onFormChange.bind(this);
    this.onEditUser = this.onEditUser.bind(this);
    this.onDeleteUser = this.onDeleteUser.bind(this);
    this.onClearUser = this.onClearUser.bind(this);
    this.onSaveUser = this.onSaveUser.bind(this);
    this.showFormNuevoUsuario = this.showFormNuevoUsuario.bind(this);
  }

  showFormNuevoUsuario () {
    if (this.state.abrirContenido === true) {
        this.setState({abrirContenido: false})
    }
    else {
        this.setState({abrirContenido: true})
    }
  }

  componentDidMount() {
    axios.get(this.URL_datosUsuarios,{
      headers:{ 'token': sessionStorage.getItem('token')}
    }).then((resp) => {
      console.log('Respuesta de listar Usuarios');
      console.log(resp.data);
      this.setState({usuarios:resp.data });
    }).catch(err => {
      console.log('Hubo error listando los estudiantes', err);
    });
  }

    onFormChange(userCurrentState){
      console.log('cambió el formulario', userCurrentState);
      this.setState({ selectedUsuario: userCurrentState });
    }
  
    onEditUser(usuario) {
      this.showFormNuevoUsuario();
      console.log('quiero editar un usuario', usuario);
      this.setState({ selectedUsuario: usuario });
    }
  
    onDeleteUser(usuarioId) {
      console.log('quiero eliminar un usuario', usuarioId);
      axios.delete(`${this.URL_datosUsuarios}/${usuarioId}`,
      {headers:{ 'token': sessionStorage.getItem('token')}}).then(data => {
        this.setState((state, props) => ({
          usuarios: this.state.usuarios.filter(st => st._id !== usuarioId),
          selectedUsuario: this.emptyUsuario
        }))
      }).catch(err => {
        console.log('hubo error borrando');
      });
    }
  
    onClearUser() {
      console.log('vamos a limpiar el usuario');
      this.setState({ selectedUsuario: this.emptyUsuario });
    }
  
    onSaveUser(evt) {
      evt.preventDefault();
      const usuario = this.state.selectedUsuario;
      if (usuario.nombre === '' || usuario.dni === '' || usuario.apellido === '' || usuario.rol === '' || usuario.celular === '' || usuario.email === '' || usuario.ingreso === '') {
        alert('Hay errores en el formulario');
        return;
      }
      if (this.state.selectedUsuario._id === -1) {
        console.log('vamos a hacer un POST', this.state.selectedUsuario);
        axios.post(this.URL_datosUsuarios, { ...usuario, _id: null } , 
          {headers:{ 'token': sessionStorage.getItem('token')}}).then((resp) => {
          console.log('Todo bien con el post', resp);
          this.setState((state, props) => ({
            usuarios: [...state.usuarios, resp.data],
            selectedUsuario: this.emptyUsuario
          }))
        }).catch(err => {
          console.log('error al hacer post', err);
        });
      } else {
        console.log('vamos a hacer un PUT', this.state.selectedUsuario);
        axios.put(`${this.URL_datosUsuarios}/${usuario._id}`, { ...usuario },
          {headers:{ 'token': sessionStorage.getItem('token')}}).then((resp) => {
          console.log('Todo bien con el put', resp);
          this.setState((state, props) => ({
            usuarios: state.usuarios.map(st => st._id === usuario._id ? usuario : st),
            selectedUsuario: this.emptyUsuario
          }))
        }).catch(err => {
          console.log('error al hacer post', err);
        });
      }
      this.showFormNuevoUsuario();
    }

  render() {
    return (
      <div className="appBody">
        <Cabezera/>
        <div id="contenedor">
          <h1 style={{ textAlign: 'center' }}>GESTION DE USUARIOS Y ROLES DEL SISTEMA</h1>
          <div id="contenedorBTN">
            <FormularioNewUser 
              usuario={this.state.selectedUsuario}
              abrirContenido={this.state.abrirContenido}
              showFormNuevoUsuario={this.showFormNuevoUsuario}
              onFormChange={this.onFormChange}
              onClearUser={this.onClearUser}
              onSaveUser={this.onSaveUser}
              onEditUser={this.onEditUser}
              />
            
            <BarraBusqueda/>
            
            <h3 id="gu">Gestion Usuarios</h3>
          </div>
          
            <TablaUsuarios                 
              abrirContenido={this.state.abrirContenido}
              showFormNuevoUsuario={this.showFormNuevoUsuario}
              usuarios={this.state.usuarios}
              onEditUser={this.onEditUser}
              onDeleteUser={this.onDeleteUser} 
            />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
