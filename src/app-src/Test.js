import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import { default as textData } from './texts.json';
import { randomProperty, intToChar } from './utils.js';

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

	onTestSubmit(answers) {
		alert(JSON.stringify(answers));
	}

	render () {
		return (
			<Formik
		        initialValues={Object.fromEntries(this.state.questions.map((t) => [t, '1']))}
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
							<WordBank words={this.state.questions}/>
							<ul className="w3-ul w3-border w3-white Question-Table">
								{this.state.questions.map((t) => 
									<li className="w3-cell-row">
										<div className=" w3-cell" style={{"white-space":"pre-wrap"}}> {textData[t]} </div>
										<select 
							          		className="w3-border w3-select"
							          		type="select"
								          	onChange={props.handleChange}
								            onBlur={props.handleBlur}
								            value={props.values.name}
								            name={t}
							          	>
							          		{[...Array(this.state.questions.length).keys()].map((i) =>
							          			<option value={i}> {intToChar(i)} </option>
							          		)}					          		
							          	</select>
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