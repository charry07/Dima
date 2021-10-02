import './styles/App.css';

// importar mis componentes
import BtnNuevoUsuario from './components/BtnNuevoUsuario'
import TablaUsuarios from './components/TablaUsuarios'
import Cabezera from './components/Cabezera'
import BarraBusqueda from './components/BarraBusqueda';
import Footer from './components/Footer'

function App() {
  return (
    <body className="appBody">
      <header>
        <Cabezera/>
      </header>
      <div id="contenedor">
        <h1 style={{textAlign: 'center'}}>GESTION DE USUARIOS Y ROLES DEL SISTEMA</h1>
        <div id="contenedorBTN">
          <BtnNuevoUsuario/> 
          <BarraBusqueda/>
          <h3 id="gu">Gestion Usuarios</h3>
        </div>
        <div>
          <TablaUsuarios/>
        </div>
      </div>
      <Footer/>

    </body>
  );
}

export default App;
