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
			<>
				<div className="w3-border w3-white Word-Box">
					<h2> Available Titles: </h2>
					<div className="Word-Bank">
						{[...Array(this.state.words.length).keys()].map((i) =>
								<div className="Word-Bank-Item Formatted-String"> 
									{intToChar(i)+'. ' + this.state.words[i]}
								</div>
						)}
					</div>
					{/*
					<table className="w3-table">
						<tr>
							{[...Array(this.state.words.length).keys()].map((i) =>
								<td className="Formatted-String"> 
									{intToChar(i)+'. ' + this.state.words[i]}
								</td>
							)}
						</tr>
					</table>
					*/}
				</div>
			</>
		);
	}
}

export default WordBank;