import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import './App.css';

import * as textData from './texts.json';
import { getMaxQuestions } from './utils.js'

import Test from './Test.js';

class TestMaker extends React.Component {

	constructor(props) {
		super(props);
		this.state = {test : null};
	}

	onMakeSubmit = (numQuestions) => {
		this.setState({test: null});
		this.setState({test: <Test questions={numQuestions}/>});
	};

	render() {
		return (
			<>
				<Formik
			        initialValues={{ questions: 0}}
			        validate={values => {
			          const errors = {};

			          if (values.questions < 1) {
			          	errors.questions = 'Practice test must contain at least 1 question.';
			          }
			          if (values.questions > getMaxQuestions()) {
			          	errors.questions = 'Practice test can only have a maximum of ' + getMaxQuestions() + ' questions';
			          }

			          return errors;
			        }}
			        onSubmit={(values, { setSubmitting }) => {
			          setTimeout(() => {
			            this.onMakeSubmit(values.questions);
			            setSubmitting(false);
			          }, 400);
			        }}
			    >
			        {( props ) => (
			          <Form>
			          	<div className="Maker-Box w3-container w3-card-4 w3-light-grey">
			          		<h2>Create a New Test</h2>

			          		<p> 
				          		<label>Number of Questions</label>
					          	<input 
					          		className="w3-input w3-border"
					          		type="number"
						          	onChange={props.handleChange}
						            onBlur={props.handleBlur}
						            value={props.values.name}
						            name="questions"
					          	/>
					          	<div className="Error-Msg">
					          		<ErrorMessage name="questions"/> 
					          	</div>
				          	</p>

				            <p> 
					            <button 
					            	className="w3-input w3-border"
					            	type="submit" 
					            	disabled={props.isSubmitting}
					            >
					              Generate Test
					            </button> 
				            </p>
			            </div>
			          </Form>
			        )}
	      		</Formik>
      			{this.state.test}
      		</>
		);
	}
}

export default TestMaker