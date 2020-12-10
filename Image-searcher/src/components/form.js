import React, { useState } from 'react';
import Error from './error';

const Form = ({saveSearch}) => {
	
	const[data, saveData] = useState('');
	const[error, saveError] = useState(false);

	const searchImg = e => {
		e.preventDefault();

		if(data.trim() === '') {
			saveError(true);
			return;
		}
		saveError(false);
		saveSearch(data);
	}

	return ( 
		<form
			onSubmit={searchImg}
		>
			<div className="row">
				<div className="form-group col-md-8">
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Search, Ex: Sports, tech" 
						onChange= {e => saveData(e.target.value)}
						/>
				</div>
				 <div className="form-group col-md-4">
					<input
						type="submit"
						className="btn btn-lg btn-danger btn-block"
						value="Search" />
				</div>
			</div>
			{ error ? <Error msg="All fields are required"/> : null }
		</form>
	 );
}
 
export default Form;