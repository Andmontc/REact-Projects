import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
	background-color: #3355FF;
	padding: 10px;
	font-weight: bold;
	color: #FFFFFF;
	`;
const TextHeader = styled.h1`
	font-size: 2rem;
	margin: 0;
	font-family: 'Slabo 27px', serif;
	text-align: center;
	`;

const Header = ({title}) => {
	return ( 
		<ContenedorHeader>
			<TextHeader>{title}</TextHeader>
		</ContenedorHeader> 
	);
}
Header.propTypes = {
	title: PropTypes.string.isRequired
}
export default Header;
