import React, {Component} from 'react';
import projectData from './projectData.js';

class Projects extends Component {
	constructor(props){
		super();
		this.state = {
			currSlide: 0
		}
	}

	nextSlide() {
		let slide = this.state.currSlide
		console.log(slide);
		if(slide < 2) {
			this.setState({currSlide: slide + 1});
		}
		console.log(this.state.currSlide);
	}

	prevSlide() {
		let slide = this.state.currSlide
		if(slide > 0) {
			this.setState({currSlide: slide - 1});
		}
		console.log(this.state.currSlide);
	}

	render(){
		let curr = this.state.currSlide;

		return (
			<div className="Projects card">
				<div className="slider" style={{
					'transform': `translateX(-${curr*110}%)`
				}}>
				<div className="slide">

					<div className="slide1"></div>
						<div className="about">
							<div className="tags_flex">
								{
									projectData[0].tags.map((tag)=> {
										return (
											<div className="tags_container">
												<div className="tags">{tag}</div>
											</div>
										)
									})
								}
							</div>

							<div className="description">
								<h3>Toonflix</h3>
								<p>I was inspired to create Toonflix as I love animation and by a book about web design 
									called <u>Don't Make Me Think</u> by Steven Krug. It influenced how I laid out my page to always think
									about whether the order or design is intuitive. My goal with this website was to make sure
									my audience does not 'have to think'.
								</p>
							</div>

							<div className="button_container"> 
								<button className="button_toonflix redirect" onClick = {
										()=>window.open("https://boiling-badlands-77858.herokuapp.com/")
								}
								>Website</button>
							</div>

						</div>
					</div>
					
					<div className="slide">
						<div className="slide2"></div>
						<div className="about">
							<div className="tags_flex">
								{
									projectData[1].tags.map((tag)=> {
										return (
											<div className="tags_container">
												<div className="tags">{tag}</div>
											</div>
										)
									})
								}
							</div>
							<div className="description">
								<h3>Color Game</h3>
								<p> This was a project I wanted to work on because I wanted to create a game and also
									improve my Javascript skills. When I started learning how to code, I jumped straight into React
									and that has stripped me away from having a deeper understanding of the language behind 
									the framework/library. By improving my Javascript fundamentals, it would also deepen my 
									understanding of React and also allow me to adapt quickly future Javascript libraries and 
									frameworks.
								</p>
							</div>

							<div className="button_container"> 
								<button className="button_toonflix redirect" onClick = {
										()=>window.open("https://rocky-coast-81821.herokuapp.com/")
								}>Website</button>
							</div>
						</div>

					</div>

				<div className="slide">
					<div className="slide3"></div>
					<div className="about">
						<div className="tags_flex">
								{
									projectData[2].tags.map((tag)=> {
										return (
											<div className="tags_container">
												<div className="tags">{tag}</div>
											</div>
										)
									})
								}
							</div>

						<div className="description">
							<h3>Omnichat</h3>
							<p> This was a project I wanted to work on because I wanted to create a game and also
								improve my Javascript skills. When I started learning how to code, I jumped straight into React
								and that has stripped me away from having a deeper understanding of the language behind 
								the framework/library. By improving my Javascript fundamentals, it would also deepen my 
								understanding of React and also allow me to adapt quickly future Javascript libraries and 
								frameworks.
							</p>
						</div>

						<div className="button_container"> 
							<button className="button_toonflix redirect" onClick = {
									()=>window.open("http://omnipotent-onions.herokuapp.com/")
							}>Website</button>
						</div>
					</div>
				</div>
			</div>

				<div className="slidecursor">
					<button className="cursor prev" onClick={this.prevSlide.bind(this)}> Previous </button>
					<button className="cursor next" onClick={this.nextSlide.bind(this)}> Next </button>
				</div>

			</div>
		)
	}	
}
export default Projects;