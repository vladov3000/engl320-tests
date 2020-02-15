import React from 'react';
import './App.css';
import { intToChar } from './utils.js';

class WordBank extends React.Component {

	constructor(props) {
		super(props);

		this.state = { words: this.props.words.slice(), table:"" };
		this.state.words.sort();


	}

	render() {
		return (
			<div className="w3-border w3-white Word-Bank">
				<h2> Available Titles: </h2>
				<table className="w3-table">
					<tr>
						{[...Array(this.state.words.length).keys()].map((i) =>
							<td> {intToChar(i)+'.'} {this.state.words[i]}</td>
						)}
					</tr>
				</table>
			</div>
		);
	}
}

export default WordBank;