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

			<p className="AboutMe">Hello, my name is Jasper Yu and I am 
			a self-taught programmer and an ex-poker player. Although I loved my previous job 
			as a professional poker player, I did not feel like I was making an impact and studied programming 
			to find new opportunities. I love the problem solving aspect of coding and love seeing
			my projects come together. Please check out some of the projects I have done!
			</p>


		</div>
	)
}

export default Home;