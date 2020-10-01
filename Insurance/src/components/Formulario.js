import React, { useState } from 'react';
import styled from '@emotion/styled';
import { yearDiference, marcaCalc, lookPlan } from '../helper';
import PropTypes from 'prop-types'


const Camp = styled.div`
	display: flex;
	margin-bottom: 1rem;
	align-items: center;
 `;

const Label = styled.label`
 flex: 0 0 100px;
 `;

const Select = styled.select`
 display: block;
 width: 100%;
 padding: 1rem;
 border: 1px solid #e1e1e1;
 -webkit-appearance: none;
 `;

const Input = styled.input`
 margin: 0 1rem;
 `;
const Button = styled.button`
 background-color: #5E7FF1;
 font-size: 16px;
 width: 100%;
 padding: 1rem;
 color: #fff;
 text-transform: uppercase;
 font-weight: bold;
 border: none;
 transition: background-color .3s ease;
 margin-top: 2rem;

 &:hover {
	 background-color: #26C6DA;
	 cursor: pointer;
 }
 `;
const Error = styled.div `
	background-color: red;
	color: white;
	padding: 1rem;
	width: 100%;
	text-align: center;
	margin-bottom: 2rem;
`;

const Formulario = ({saveResume, saveLoading}) => {
	const [data, saveData] = useState ({
		marca: '',
		plan: '',
		year: ''

	});
	const [error, saveError] = useState(false);

	//extraer los valores del state
	const { marca, plan, year} = data;
	//leer los datos y pasarlos al state
	const Info = e => {
		saveData({
			...data,
			[e.target.name] : e.target.value
		})
	}
	// al presionar submit
	const insurance = e => {
		e.preventDefault();
		if (marca.trim() === '' || plan.trim() === '' || year.trim() === '') {
			saveError(true);
			return;
		}
		saveError(false);
		let base = 2000;
		const diference = yearDiference(year);
		// por cada year restar 3%
		base -= ((diference * 3) * base) / 100;
		// segun la marca
		base = marcaCalc(marca) * base;
		// segun plan
		const incPlan = lookPlan(plan);
		base = parseFloat( incPlan * base ).toFixed(2);
		saveLoading(true);
		setTimeout(() => {
			saveLoading(false);
			saveResume ({
				coti: Number(base),
				data
			});
		}, 3000);
	}

	return (  
		<form 
			onSubmit={insurance}
		>
			{error ? <Error> All fields are required </Error> : null}

			<Camp>
				<Label>Type</Label>
				<Select
					name="marca"
					value={marca}
					onChange={Info}
				>
					<option value="">---Choose your car---</option>
					<option value="american">American</option>
					<option value="euro">European</option>
					<option value="asian">Asian</option>
				</Select>
			</Camp>
			<Camp>
				<Label>Year</Label>
				<Select
					name="year"
					value={year}
					onChange={Info}
				>
					<option value="">---Choose the year---</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
					<option value="2014">2014</option>
					<option value="2013">2013</option>
					<option value="2012">2012</option>
				</Select>
			</Camp>
			<Camp>
				<Label>Plan</Label>
				<Input
					type="radio"
					name="plan"
					value="basic"
					checked={plan==="basic"}
					onChange={Info}
				/> Basic
				<Input
					type="radio"
					name="plan"
					value="full"
					checked={plan==="full"}
					onChange={Info}
				/> Full
			</Camp>
			<Button type="submit">Quote</Button>
		</form>
	);
}
Formulario.propTypes = {
	saveResume: PropTypes.func.isRequired,
	saveLoading: PropTypes.func.isRequired
}
export default Formulario;