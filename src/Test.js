import React from 'react';
import './form-styles.css'

class Test extends React.Component{
	constructor(props) {
		super(props);

		// Generate questions
		this.state = { questions: []}
		for (let i = 0; i < parseInt(this.props.questions); i ++) {
			this.state.questions.push(i);
		}
	}

	render () {
		return (
			<>
				<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
				<ul class="w3-ul w3-border">
					{this.state.questions.map((t) => 
						<li> {t} </li>
						)}
				</ul>
			</>
			);
	}
}

export default Test