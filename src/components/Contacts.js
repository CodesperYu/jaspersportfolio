import React, { Component } from 'react';

function Contacts(props) {

  return (
		<div className="Contacts card">
			<div className="info">
				<div className="contact_title">
					Let's get in touch!
				</div>
				<div className="contact_email">
						Contact: JasperYu.KK@gmail.com
				</div>
				<div className="contact_info">
					<button className="button_linkedin redirect" onClick={
						()=>window.open("https://www.linkedin.com/in/jasper-yu/" , "linkedin")
					}>
						<i className="linkedin huge contact_icon icon"/>
					</button>
					<button className="button_github redirect" onClick={
						()=>window.open("https://github.com/CodesperYu", "github")
					}>
						<i className="github huge contact_icon icon"/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Contacts;