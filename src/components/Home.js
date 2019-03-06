import React from 'react';
import picture from "./pp.jpg";
function Home(props) {
  return (
		<div className="Home card">
			<img className="ProfilePic" src={picture} alt=""/>
			<div className="NameCard">
				<div className="NameCard__Container">
					<p className="NameCard__Name">Jasper Yu</p>
				</div>
				<div className="NameCard__Container">
					<p className="NameCard__Occupation">Software Engineer</p>
				</div>
			</div>
			<div className="AboutMe">
				<p>
					Hello, my name is Jasper Yu and I am 
					a self-taught programmer and an ex-poker player. Although I loved my previous job 
					as a professional poker player, I did not feel like I was making an impact and studied programming 
					to find new opportunities. I love the problem solving aspect of coding and love seeing
					my projects come together. Please check out some of the projects I have done!
				</p>
			</div>
		</div>
	)
}

export default Home;