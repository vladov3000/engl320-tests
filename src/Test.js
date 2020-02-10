import React from 'react';
import * as textData from './texts.json';
import { randomProperty } from './utils.js'

class Test extends React.Component{

	constructor(props) {
		super(props);

		this.state = { questions: [] }

		let usedTexts = new Set();
		for (let i = 0; i < parseInt(this.props.questions); i ++) {
			var toAdd = randomProperty(textData.default);

			while (usedTexts.has(toAdd)) { toAdd = randomProperty(textData.default); }
			usedTexts.add(toAdd);


			this.state.questions.push(toAdd);
		}
	}

	render () {
		return (
			<>
				<ul className="w3-ul w3-border">
					{this.state.questions.map((t) => 
						<li> {t} </li>
						)}
				</ul>
			</>
		);
	}
}

export default Test