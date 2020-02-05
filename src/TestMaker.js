import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import styled from "@emotion/styled";
import './form-styles.css';
import './App.css';

import Test from './Test.js';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyNumInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="number-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

class TestMaker extends React.Component {

	constructor (props) {
		super(props);

		this.state = {test : null};
	}

	render() {
		return (
			<>
				<Formik className="Gen-settings"
			        initialValues={{ questions: 10}}
			        validate={values => {
			          const errors = {};

			          if (values.questions < 1) {
			          	errors.questions = 'Practice test must contain more than 1 question.';
			          }

			          return errors;
			        }}
			        onSubmit={(values, { setSubmitting }) => {
			          setTimeout(() => {
			            this.setState({test : <Test questions={values.questions}/>});
			            setSubmitting(false);
			          }, 400);
			        }}
			      >
			        {({ isSubmitting }) => (
			          <Form>
			          	<MyNumInput label = "Number of Questions"
			          				name = "questions"
			          				type = "number"/>
			            <button type="submit" disabled={isSubmitting}>
			              Submit
			            </button>
			          </Form>
			        )}
	      		</Formik>
      			{this.state.test}
      		</>
		);
	}
}

export default TestMaker