import React, { useState } from 'react';
import Failure from './error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({saveGastos, crearGasto}) => {
	const [name, formName] = useState('');
	const [canti, saveCanti] = useState(0);
	const [error, saveError] = useState(false);

	const addExpense =  e => {
		e.preventDefault();
		if(canti < 1 || isNaN(canti) || name.trim() === '') {
			saveError(true);
			return; 
		}
		saveError(false);
		//build the expense
		const expense = {
			name,
			canti,
			id: shortid.generate()
		}
		saveGastos(expense);
		crearGasto(true);
		formName('');
		saveCanti(0);
	}
	return ( 
		<form
			onSubmit={addExpense}
		>
			<h2> Add your expenses</h2>
			{error ? <Failure comment="All fields are required ! or the values are incorrect" />  :null}
			<div className="campo">
				<label> Expense </label>
				<input 
					type="text"
					className="u-full-width"
					placeholder="Ex: Transport"
					value={name}
					onChange={e => formName(e.target.value)}
				/>
			</div>
			<div className="campo">
				<label> Amount </label>
				<input 
					type="number"
					className="u-full-width"
					placeholder="Ex: 2000"
					value={canti}
					onChange={e => saveCanti(parseInt(e.target.value))}
				/>
			</div>
			<input 
				type="submit"
				className="button-primary u-full-width"
				value="Add Expense"
			/>
		</form>
	 );
}
Formulario.propTypes = {
	saveGastos: PropTypes.func.isRequired,
	crearGasto: PropTypes.func.isRequired
}

export default Formulario;