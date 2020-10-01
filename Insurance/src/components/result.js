import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Msg = styled.p `
	background-color: rgb(127, 224, 237);
	margin-top: 2rem;
	padding: 1rem;
	text-align: center;
`;

const Total = styled.p `
	color: #00838F;
	padding: 1rem;
	text-transform: uppercase;
	font-weight: bold;
	margin: 0;
`;

const CotiResult = styled.div `
	text-align: center;
	padding: .5rem;
	border: 1px solid #26C6Da;
	background-color: rgb(127, 224, 237);
	margin-top: 1rem;
	position: relative;
`;

const Result = ({coti}) => {

	return ( 
		(coti === 0 ) ? <Msg>Choose a Type, Year and plan </Msg>
		: (
			<CotiResult>
						<Total> The Total is: ${coti} </Total>
			</CotiResult> 
		)
	 )
}
Result.propTypes = {
	coti: PropTypes.number.isRequired
}
export default Result;