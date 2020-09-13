import React from 'react';
import PropTypes from 'prop-types';

const Failure = ({comment}) => {
	return (  
		<p className='alert alert-danger error'>{comment}</p>
	);
}

Failure.propTypes = {
	comment: PropTypes.string.isRequired
}
	export default Failure;