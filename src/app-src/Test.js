import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import { default as textData } from './texts.json';
import { randomProperty, intToChar, getOccurences, getPosition } from './utils.js';

import WordBank from './WordBank.js';

class Test extends React.Component{

	constructor(props) {
		super(props);

		this.state = { questions: [] }

		// add random questions
		let usedTexts = new Set();
		for (let i = 0; i < parseInt(this.props.questions); i ++) {

			// find title we haven't used yet
			let tempTitle = randomProperty(textData)
			while (usedTexts.has(tempTitle)) { tempTitle = randomProperty(textData); }
			usedTexts.add(tempTitle);

			// pick which lines we are going to use
			let tempContents = textData[tempTitle];
			let totalLines = getOccurences(tempContents, '\n') - this.props.lines;
			if (totalLines > 0) {
				let startLine = totalLines * Math.random() << 0;
				let endLine = startLine + this.props.lines;
				tempContents = tempContents.slice(getPosition(tempContents, '\n', startLine),
					getPosition(tempContents, '\n', endLine));
			}

			// add it to questions
			let toAdd = { title: tempTitle, correct: "Not-Checked", contents: tempContents};
			this.state.questions.push(toAdd);
		}

		// add answers to questions
		let sortedQuestions = this.state.questions.slice();
		sortedQuestions.sort((a, b) => a.title.localeCompare(b.title));
		this.state.questions = this.state.questions.map((q) => {
			q.answer = intToChar(sortedQuestions.indexOf(q));
			return q;
		});
	}

	onTestSubmit(answers) {
		let newQuestions = this.state.questions.map((q) => {
			if (q.answer === answers[q.title]) {
				q.correct = "Correct";
			} else {
				q.correct = "Incorrect";
			}
			return q;
		});
		
		this.setState({ questions: newQuestions});
	}

	render () {
		return (
			<Formik
		        initialValues={Object.fromEntries(this.state.questions.map((t) => [t.title, 'A']))}
		        validate={values => {
		          const errors = {};

		          return errors;
		        }}
		        onSubmit={(values, { setSubmitting }) => {
		          setTimeout(() => {
		            this.onTestSubmit(values);
		            setSubmitting(false);
		          }, 400);
		        }}
			>
				

				{( props ) => (
					<Form>
						<div className="Test-Box w3-container w3-card-4 w3-light-grey">
							<WordBank words={this.state.questions.map((t) => t.title)}/>
							<ul className="w3-ul w3-border w3-white Question-Table">
								{this.state.questions.map((q) => 
									<li className={"w3-row " + q.correct}>
											<div className="w3-col s6 w3-center Formatted-String"> {q.contents} </div>
											<div className="w3-col s6 w3-center"> 
												{q.correct === "Not-Checked" &&
													<select 
										          		className="w3-border w3-select"
										          		type="select"
											          	onChange={props.handleChange}
											            onBlur={props.handleBlur}
											            value={props.values.name}
											            name={q.title}
											            style={{"width":"10%"}}
										          	>
										          		{[...Array(this.state.questions.length).keys()].map((i) =>
										          			<option id={i} value={intToChar(i)}> {intToChar(i)} </option>
										          		)}				          		
										          	</select>
										        }
										        {q.correct !== "Not-Checked" &&
										        	<>
										        		Correct Answer: <b> {q.answer} </b>
										        	</>
										        }
									        </div>
									</li>
								)}
							</ul>
				            <button 
				            	className="w3-input w3-border"
				            	type="submit"
				            	disabled={props.isSubmitting}
				            >
				              Submit Test
				            </button> 
						</div>
					</Form>
				)}

			</Formik>
		);
	}
}

export default Test