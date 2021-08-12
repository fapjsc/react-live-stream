import { Field, reduxForm } from 'redux-form';

const StreamForm = props => {
  const { onSubmit } = props;

  // Handle Submit
  const handleSubmit = formValue => {
    /* 1.onSubmit由父祖健傳遞
       2.如果是StreamCreate, 呼叫create stream api
       3.如果是StreamEdit, 呼叫update stream api
       4.結論就是由父組件決定onSubmit這個function裡面呼叫的api (action)
    */
    onSubmit(formValue);
  };

  return (
    /* 1.Redux-Form 會幫我們把 Container 裡的 onSubmit 注入成 FormComponent 裡的 handleSubmit props，
         且幫我們處理掉 e.preventDefault() 處理的跳頁問題。
       2.這裏的props.handleSubmit就是redux-form封裝的function
    */
    <form onSubmit={props.handleSubmit(handleSubmit)} className="ui form error">
      <Field name="title" component={renderField} label="Enter Title" />
      <Field name="description" component={renderField} label="Enter Description" />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

//=======================//

// Handle Validate
const validate = formValue => {
  const { title, description } = formValue;
  let errors = {};
  if (!title) errors.title = 'You must enter a title';
  if (!description) errors.description = 'You must enter description';

  return errors;
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

// const formWrapped = reduxForm({
//   form: 'streamCreate',
//   validate,
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
