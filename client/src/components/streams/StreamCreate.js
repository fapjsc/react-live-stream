import { Field, reduxForm } from 'redux-form';

// Handle Validate
const validate = formValue => {
  const { title, description } = formValue;
  let errors = {};
  if (!title) errors.title = 'You must enter a title';
  if (!description) errors.description = 'You must enter description';

  return errors;
};

// Handle Submit
const handleSubmit = formValue => {
  console.log(formValue);
};

// Handle Error
const handleError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

// Render Elements
const renderField = ({ input, label, meta }) => {
  const { touched, error } = meta;
  const classes = `field ${touched && error && 'error'}`;
  return (
    <div className={classes}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {handleError(meta)}
    </div>
  );
};

const StreamCreate = props => {
  return (
    <form onSubmit={props.handleSubmit(handleSubmit)} className="ui form error">
      <Field name="title" component={renderField} label="Enter Title" />
      <Field name="description" component={renderField} label="Enter Description" />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
