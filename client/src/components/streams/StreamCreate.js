import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamCreate = props => {
  // Actions
  const { createStream } = props;

  // Handle Submit
  const onSubmit = formValue => {
    createStream(formValue);
  };

  return (
    <div>
      <h2>Create Stream</h2>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
