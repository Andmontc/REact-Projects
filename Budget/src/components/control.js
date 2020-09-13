import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';
import PropTypes from 'prop-types';

const Control = ({budget, restante}) => {
	return (  
		<Fragment>
			<div className="alert-primary">
				Budget: $ {budget}
			</div>
			<div className={checkBudget(budget, restante)}>
				Left: $ {restante}
			</div>
		</Fragment>
	);
}
Control.propTypes = {
	budget: PropTypes.number.isRequired,
	restante: PropTypes.number.isRequired
}
export default Control;