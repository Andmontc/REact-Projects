import React from 'react';
import styled from '@emotion/styled';
import { firstCap } from '../helper';
import PropTypes from 'prop-types'


const DivResume = styled.div `
	padding: 1rem;
	text-justify: left;
	background-color: #00838F;
	color: #FFF;
	margin-top: 1rem;
`;
const Ht = styled.h2 `
	text-align:center;
`

const Resume = ({data}) => {

	const {marca, year, plan} = data;
	if (marca === '' || year === '' || plan === '') return null;
	return ( 
		<DivResume>
			<Ht> Resume Insurance </Ht>
			<ul>
				<li>Type: {firstCap(marca)}</li>
				<li>Plan: {firstCap(plan)}</li>
				<li>Model Year: {year}</li>
			</ul>
		</DivResume>
		
	 );
}
Resume.propTypes = {
	data: PropTypes.object.isRequired
}
export default Resume;