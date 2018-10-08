import React from 'react';

import GitHubIcon from '../img/skillicon/GitHub.png';
import HTML5Icon from '../img/skillicon/HTML5.png';
import JestIcon from '../img/skillicon/Jest.png';
import MongoDBIcon from '../img/skillicon/mongodb.png';
import MySQLIcon from '../img/skillicon/MySql.png';
import NodeJSIcon from '../img/skillicon/NodeJS.png';
import ReactIcon from '../img/skillicon/React.png';
import ReduxIcon from '../img/skillicon/Redux.png';
import SassIcon from '../img/skillicon/Sass.png';
import SketchIcon from '../img/skillicon/Sketch.png';

function Skills(props) {
  return (
		<div className="Skills card">
			<div className='first row'>
				<img className="skill_icon" src={ReactIcon} alt="react"/>
				<img className="skill_icon" src={ReduxIcon} alt="redux"/>
				<img className="skill_icon" src={NodeJSIcon} alt="nodejs"/>
				<img className="skill_icon" src={GitHubIcon} alt="github"/>
				<img className="skill_icon" src={HTML5Icon} alt="html5"/>
			</div>
			<div className="second row">
				<img className="skill_icon" src={SassIcon} alt="sass"/>
				<img className="skill_icon" src={JestIcon} alt="jest"/>
				<img className="skill_icon" src={MongoDBIcon} alt="mongodb"/>
				<img className="skill_icon" src={MySQLIcon} alt="mysql"/>
				<img className="skill_icon" src={SketchIcon} alt="github"/>
			</div>
		</div>
	)
}

export default Skills;