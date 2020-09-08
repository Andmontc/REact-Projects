import React from 'react';
import PropTypes from 'prop-types'


const Cita = ({cita, eliminateCita}) => (
	<div className="cita">
		<p>Pet: <span>{cita.pet}</span></p>
		<p>Owner: <span>{cita.owner}</span></p>
		<p>Date: <span>{cita.date}</span></p>
		<p>Hour: <span>{cita.hour}</span></p>
		<p>Symptoms: <span>{cita.symptoms}</span></p>

		<button
			className="button eliminar u-full-width"
			onClick = {() => eliminateCita(cita.id)}
		>Eliminate Appointment &times;</button>
	</div>
);

Cita.propTypes = {
	cita: PropTypes.object.isRequired,
	eliminateCita: PropTypes.func.isRequired
}

export default Cita;