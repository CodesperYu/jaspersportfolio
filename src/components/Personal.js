import React from 'react';

import traits from './Traits.js';

function Personal(props) {
	console.log(traits);
  return (
		<div className="Personal card">
			<div className="grid-container">
				{/* <p className="grid-item">{traits[1].description}</p>
				<p className="grid-item">{}</p>
				<p className="grid-item">{}</p>  
				<p className="grid-item">{}</p> */}
				{
					traits.map((trait, index) => {
						return <div className="grid-item">
								<h1>{trait.trait}</h1>
								<p>{trait.description}</p>
							</div>
					})
				}
			</div>
		</div>
	)
}

export default Personal;