import React from 'react';
import './App.css';

class WordBank extends React.Component {

	constructor(props) {
		super(props);

		this.state = { words: this.props.words, table:"" };
		this.state.words.sort();


	}

	render() {
		return (
			<div className="w3-border w3-white Word-Bank">
				<h2> Available Titles: </h2>
				<table className="w3-table">
					<tr>
						{this.state.words.map((w) => 
								<td> {w} </td>
						)}
					</tr>
				</table>
			</div>
		);
	}
}

export default WordBank;