import React from 'react';
import Gasto from './gasto';
import PropTypes from 'prop-types';

const  Lista = ({gastos}) => {
	return (  
		<div className="gastos-realizados">
			<h2>List</h2>
			{gastos.map(gasto =>(
				<Gasto
					key={gasto.id}
					gasto={gasto}
				/>
			))}
		</div>
	);
}
Lista.propTypes = {
	gastos: PropTypes.array.isRequired
}
export default Lista;
