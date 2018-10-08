import React, { Component } from 'react';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Personal from '../components/Personal';
import Contact from '../components/Contact';
// import '..semantic-ui-css/semantic.min.css'

class Portfolio extends Component {
	constructor(props){
		super();
		this.state = {
			card: 'Home',
			index: 0
		}
	}

	changeCard = (e) => {
		console.log(e.target.value);
		let content = e.target.value;
		this.setState({
			index: content
		}, () => {
			console.log(this.state.index)
		});
	}

  render() {
		let page;
		if (this.state.card === 'Home') {
			page = <Home/>
		} else if (this.state.card === 'Projects') {
			page = <Projects/>
		};


    return (
			<div className="Portfolio">
				
				<div className="Scrollbar">
					<button id="Home" value="0" className="content" onClick={this.changeCard}>
						<i className="home icon"></i>
						Home
					</button>
					<button id="Projects" value="1" className="content" onClick={this.changeCard}>
						<i className="folder open icon"></i>
						Projects
					</button>
					<button id="Skills" value="2" className="content" onClick={this.changeCard}>
						<i className="code branch icon"></i>
						Skills
					</button>
					<button  id="Personal" value="3" className="content" onClick={this.changeCard}>
						<i className="user icon"></i>
						Personal
					</button >
					<button id="Contacts" value="4" className="content" onClick={this.changeCard}> 
						<i className="envelope icon"></i> 
						Contact
					</button>
				</div>
				<div className="display_wrapper">
					<div className="display" style={
						{
							'transform': `translateY(-${this.state.index*120}%)`
						}
					}>
						<Home/>
						<Projects/>
						<Skills/>
						<Personal/>
					</div>
				</div> 
			</div>
    );
  }
}

export default Portfolio;
