import logo from './logo.svg';
import './styles/App.css';
import editar from './images/editar.png'

function App() {
  return (
    <div classNameName="App">
      <div className="field" id="searchform">
        <span className="icon"><i className="fa fa-search"></i></span>
        <input type="search" className="search" id="search" placeholder="Codigo, Fecha, Nombre..." />
        <input type="Submit" className="submit" value="Buscar"/>
      </div>
      
      <div>
        <table>
          <thead>
              <tr>
                <th className="codigo">Codigo</th>
                <th className="fecha">Fecha</th>
                <th className="cliente">Cliente</th>
                <th className="telefonoCliente">Telefono Cliente</th>
                <th className="vendedor">Vendedor</th>
                <th className="telefonoVendedor">Telefono Vendedor</th>
                <th className="total">Total</th>
                <th className="estado">Estado</th>
                <th className="opciones">Opciones</th>
              </tr>
            </thead>
          <tbody>  
              <tr>
                <td>0401235984256</td>
                <td>27/09/2021</td>
                <td>Juan Sebastian Rodriguez Diaz</td>
                <td>3221546982</td>
                <td>Mayra Alejandra Moreno Villanueva</td>
                <td>3219765179</td>
                <td>201520630</td>
                <td>Pendiente</td>
                <td>
                  <a href="default.asp">
                  <img src={editar} alt="editar" className="editar"/>
                  </a>
                  </td>
              </tr>

              <tr>
                <td>0401235984256</td>
                <td>27/09/2021</td>
                <td>El Pepe</td>
                <td></td>
                <td>Juanita</td>
                <td></td>
                <td>150000</td>
                <td>Pendiente</td>
                <td>
                  <a href="default.asp">
                  <img src={editar} alt="editar" className="editar"/>
                  </a>
                  </td>
              </tr>

              <tr>
                <td>04012626257</td>
                <td>14/09/2020</td>
                <td>La Pepa</td>
                <td></td>
                <td>Juanito</td>
                <td></td>
                <td>1650000</td>
                <td>Entregado</td>
                <td></td>
              </tr>
              
            </tbody>
          </table> 
      </div>
    </div>
  );
}

export default App;
