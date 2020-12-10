import React from 'react';
import Image from './image';

const Lista = ({image}) => {
	return ( 
		<div className="col-12 p-5 row">
			{image.map(imagen => (
				<Image 
					key={Image.id}
					imagen={imagen}
				/>
			))}
		</div>
	 );
}
 
export default Lista;