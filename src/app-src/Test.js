import React from 'react';
import { default as textData } from './texts.json';
import { randomProperty } from './utils.js';

import WordBank from './WordBank.js';

class Test extends React.Component{

	constructor(props) {
		super(props);

		this.state = { questions: [] }

		let usedTexts = new Set();
		for (let i = 0; i < parseInt(this.props.questions); i ++) {
			var toAdd = randomProperty(textData);

			while (usedTexts.has(toAdd)) { toAdd = randomProperty(textData); }
			usedTexts.add(toAdd);

			this.state.questions.push(toAdd);
		}
	}

	render () {
		return (
			<div className="Test-Box w3-container w3-card-4 w3-light-grey">
				<WordBank words={this.state.questions}/>
				<ul className="w3-ul w3-border w3-white">
					{this.state.questions.map((t) => 
						<li className="w3-cell-row">
							<div className=" w3-cell" style={{"white-space":"pre-wrap"}}> {textData[t]} </div>
							<div className=" w3-cell"> Answer Box </div>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Test