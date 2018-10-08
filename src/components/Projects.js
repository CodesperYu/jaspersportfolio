import React, {Component} from 'react';
// import ToonFlix from '../img/ToonFlix.png';
// import ColorGame from '../img/ColorGame.png';
// import Omni from '../img/OmniChat.png';


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
					<div className="slide slide1">
					</div>
					<div className="slide slide2">
					</div>
					<div className="slide slide3">
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