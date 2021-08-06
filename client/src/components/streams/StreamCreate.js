import { Field, reduxForm } from 'redux-form';

const StreamCreate = props => {
  // Handler Function
  const handleSubmit = formValue => {
    console.log(formValue);
  };

  // Render Elements
  const inputEl = ({ input, label }) => (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
    </div>
  );

  return (
    <form onSubmit={props.handleSubmit(handleSubmit)} className="ui form">
      <Field name="title" component={inputEl} label="Enter Title" />
      <Field name="description" component={inputEl} label="Enter Description" />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
