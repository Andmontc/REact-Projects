import React, { Fragment, useState} from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types'


const Formulario = ({makeCita}) => {
	//crear state
	const [cita, actualizarcita] = useState({
		pet: '',
		owner: '',
		date: '',
		hour: '',
		symptoms: ''
	});

	const [error, showerror] = useState(false)

	//funcion para actualizar cuando el usuario escribe

	const Actualizaelstate = e =>{
		actualizarcita({
			...cita,
			[e.target.name]: e.target.value
		})
	}
	// Extraer valores
	const {pet, owner, date, hour, symptoms} = cita;

	// agregar citas
	const submitcita = e => {
		e.preventDefault();

		// validar
		if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' ||
		    hour.trim() === '' || symptoms.trim() === ''){
				showerror(true);
				return;
			}
		// reiniciar validacion
			showerror(false);

		// agregar un id
			cita.id = uuid();

		// crear la cita
			makeCita(cita);

		//reinicia el form
		actualizarcita({
			pet: '',
			owner: '',
			date: '',
			hour: '',
			symptoms: ''
		})
	}
	return (  
		<Fragment>
		<h2> Appointments </h2>
		{error ? <p className="alerta-error">All Fields are mandatory !</p> : null}
		<form
			onSubmit={submitcita}>
			<label> Pet Name </label>
			<input
				type="text"
				name="pet"
				className="u-full-width"
				placeholder="Pet name"
				onChange={Actualizaelstate}
				value={pet}/>

			<label> Pet Owner </label>
			<input
				type="text"
				name="owner"
				className="u-full-width"
				placeholder="Pet owner"
				onChange={Actualizaelstate}
				value={owner}/>

			<label> Date </label>
			<input
				type="date"
				name="date"
				className="u-full-width"
				onChange={Actualizaelstate}
				value={date}/>

			<label> Hour </label>
			<input
				type="time"
				name="hour"
				className="u-full-width"
				onChange={Actualizaelstate}
				value={hour}/>
			
			<label> Symptoms </label>
			<textarea
				name="symptoms"
				className="u-full-width"
				onChange={Actualizaelstate}
				value={symptoms}>
				</textarea>
			<button
				type="submit"
				className="u-full-width button-primary">
			Add Appointment</button>
		</form>
		</Fragment>
	);
}

Formulario.propTypes = {
	makeCita: PropTypes.func.isRequired
} 
export default Formulario;