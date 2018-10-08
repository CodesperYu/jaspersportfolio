import React from 'react';
import picture from "./pp.jpg";
function Home(props) {
  return (
		<div className="Home card">
			<div className="Title_header">
				<div className="BackCover"></div>
				<img className="ProfilePic" src={picture} alt=""/>
				<table className="NameCard">
					<tbody>
						<tr>
							<th className="Name">Jasper Yu</th>
						</tr>
						<tr>
							<td className="Occupation">Software Engineer</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p className="AboutMe">Hello! My name is Jasper Yu and I am born and raised in San Francisco. 
				We live one life and and it's up to us to make it as meaningful as possible. I 
				decided to pursue software engineering and enjoy the puzzle solving aspect of it!
			</p>

			
		</div>
	)
}

export default Home;