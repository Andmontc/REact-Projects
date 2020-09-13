import React, { Fragment, useState } from 'react';
import Failure from './error';
import PropTypes from 'prop-types';

const  Ask = ({ saveBudget, saveRestante, updateAsk }) => {

	// define state
	const [cant, savecant] = useState(0);
	const [error, saveError] = useState(false);

	// funcion submit
	const addBudget = e => {
		e.preventDefault();
	// validate
		if(cant < 1 || isNaN(cant)) {
			saveError(true);
			return; 
		}
		saveError(false);
		saveBudget(cant);
		saveRestante(cant);
		updateAsk(false);
	}

	return ( 
		<Fragment>
			<h2> Define your budget  </h2>
				{error ? <Failure comment="The budget can't be empty or a negative number" />  :null}
			<form
				onSubmit={addBudget}>
				<input
					type="number"
					className="u-full-width"
					placeholder="Put your weekly budget"
					onChange={e => savecant(parseInt(e.target.value, 10))}
				/>

				<input 
					type="submit"
					className="button-primary u-full-width"
					value="Define budget"
				/>
			</form>
		</Fragment>
	 );
}

Ask.propTypes = {
	saveBudget: PropTypes.func.isRequired,
	saveRestante: PropTypes.func.isRequired,
	updateAsk: PropTypes.func.isRequired
}
export default Ask ;