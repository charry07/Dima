import React from 'react'

export class FormularioNuevoUsuario extends React.Component {
	render() {
		
		return (
			<form id="miForm" onSubmit={this.props.onSave}>
				<div className="form-row">
					<div className="form-group col-md-6">
					<label >DNI</label>
					<input 
						type="number" 
						className="form-control" 
						id="dni" 
						// value={usuario.dni}
						// onChange={(evt) => this.props.onChange({ ...usuario, dni: evt.target.value })}
						/>
					</div>

					<div className="form-group col-md-6">
					<label  value>Nombre</label>
					<input 
					type="text" 
					className="form-control" 
					// value={usuario.nombre}
					// onChange={(evt) => this.props.onChange({ ...usuario, nombre: evt.target.value })}
					/>
					</div>

					<div className="form-group col-md-6">
					<label >Apellido</label>
					<input 
					id="Apellido" 
					className="form-control" 
					// value={usuario.apellido}
					// onChange={(evt) => this.props.onChange({ ...usuario, apellido: evt.target.value })} 
					/> 
					
					</div>
					<div className="form-group col-md-6">
					<label >Celular</label>
					<input 
					type="number" 
					className="form-control" 
					id="celular" 
					// value={usuario.celular}
					// onChange={(evt) => this.props.onChange({ ...usuario, celular: evt.target.value })}
					/>
					</div>

					{/* <div className="form-group col-md-6">
					<label >Especialidad</label>
					<input type="text"  className="form-control" id="especialidad"/>
					</div> */}

				</div>

				<div className="form-group">
					<label >E-mail</label>
					<input 
					type="email"  
					className="form-control" 
					id="emaiil" 
					placeholder="pepito@cualquieremail.com" 
					// value={usuario.email}
					// onChange={(evt) => this.props.onChange({ ...usuario, email: evt.target.value })}
					/>
				</div>
				
				<div className="form-row">
					<div className="form-group col-md-4">
					<label >Rol</label>
					<select 
					id="rol"  
					className="form-control" 
					// value={usuario.rol}
					// onChange={(evt) => this.props.onChange({ ...usuario, rol: evt.target.value })}
					>
						<option>Seleccione</option>
						<option>*Administrador</option>
						<option>*Vendedor</option>
						<option>*Visitante</option>
						<option>*comprador</option>
					</select>
					</div>

					<div className="form-group col-md-6">
						<label >Ingreso</label>
						<input 
						type="date"  
						className="form-control" 
						id="fecha" 
						// value={usuario.ingreso}
						// onChange={(evt) => this.props.onChange({ ...usuario, ingreso: evt.target.value })}
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

				<button type="submit" className="btn btn-primary" /*value={usuario._id === -1 ? 'Crear' : 'Editar'}*/ >Agregar</button>
          		<input type="button" value="Limpiar" /*onClick={this.props.onClear}*/ />
			</form>

		)
	}
}
	

export default FormularioNuevoUsuario
