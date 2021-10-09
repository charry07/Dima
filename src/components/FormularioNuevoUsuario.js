import React from 'react'

class FormularioNuevoUsuario extends React.Component {
	render() {
		return (
		<div>
			<form id="miForm">
				<div class="form-row">
					<div class="form-group col-md-6">
					<label for="ID">ID</label>
					<input type="number" class="form-control" id="id"/>
					</div>
					<div class="form-group col-md-6">
					<label for="nombre">Nombre</label>
					<input type="text" class="form-control" />
					</div>
					<div class="form-group col-md-6">
					<label for="Apellido">Apellido</label>
					<input type="text" class="form-control" id="Apellido"/>
					</div>
					<div class="form-group col-md-6">
					<label for="celular">Celular</label>
					<input type="number" class="form-control" id="celular"/>
					</div>
					<div class="form-group col-md-6">
					<label for="especialidad">Especialidad</label>
					<input type="text" class="form-control" id="especialidad"/>
					</div>
				</div>
				<div class="form-group">
					<label for="Email">E-mail</label>
					<input type="email" class="form-control" id="emaiil" placeholder="pepito@cualquieremail.com"/>
				</div>
				<div class="form-row">
					<div class="form-group col-md-4">
					<label for="rol">Rol</label>
					<select id="rol" class="form-control">
						<option selected>Seleccione </option>
						<option>*Administrador</option>
						<option>*Vendedor</option>
						<option>*Visitante</option>
						<option>*comprador</option>
					</select>
					</div>
					<div class="form-group col-md-6">
						<label for="fecha">Fecha</label>
						<input type="date" class="form-control" id="fecha"/>
					</div>
				</div>
				<div class="form-group">
					<div class="form-check">
					<input class="form-check-input" type="checkbox" id="gridCheck"/>
					<label class="form-check-label" for="gridCheck">
						Verificar
					</label>
					</div>
				</div>
				<button type="submit" class="btn btn-primary">Agregar</button>
			</form>
		</div>
		)
	}
}
	

export default FormularioNuevoUsuario
