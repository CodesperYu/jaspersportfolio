import React, { Component } from 'react';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Personal from '../components/Personal';
import Contacts from '../components/Contacts';
// import '..semantic-ui-css/semantic.min.css'

class Portfolio extends Component {
	constructor(props){
		super();
		this.state = {
			card: 'Home',
			lastScrollY: 0,
			contents: [
				{
					name: 'Home',
					style: 'home icon'
				}, 
				{
					name: 'Projects',
					style: 'folder open icon'
				}, 
				{
					name: 'Skills',
					style: 'code branch icon'
				}, 
				{
					name: 'Personal',
					style: 'user icon'
				}, 
				{
					name: 'Contact',
					style: 'envelope icon'
				}
			],
			index: 0
		}
	}

	changeCard = (e) => {
		let content = e.target.value;
		this.setState({
			index: content
		})
	}

  render() {
    return (
			<div className="Portfolio">
				<div className="Scrollbar">
					{
						this.state.contents.map((content, index) => {
							return (
								<button id={content.name} value={index} className="content" onClick = {this.changeCard} key={index}>
									<i className={content.style}></i>
									{content.name}
								</button>
							);
						})
					}
				</div>
				<div className="display_wrapper">
					<div className="display" style={
						{
							'transform': `translateY(-${this.state.index*700}px)`
						}
					}>
						<Home/>
						<Projects/>
						<Skills/>
						<Personal/>
						<Contacts/>
					</div>
				</div> 
			</div>
    );
  }
}

export default Portfolio;
