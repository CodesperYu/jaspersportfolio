import React from 'react';

import traits from './Traits.js';

function Personal(props) {
  return (
		<div className="Personal card">
			<div className="grid-container">
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