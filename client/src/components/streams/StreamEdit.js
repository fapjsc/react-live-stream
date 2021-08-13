import { useEffect } from 'react';
import { fetchStreamSingle, updateStream } from '../../actions';
import { connect } from 'react-redux';

// Redux Form
import StreamForm from './StreamForm';

const StreamEdit = props => {
  //==== Props ====//
  const { fetchStreamSingle, updateStream, match, stream } = props;
  //==== UseEffect ====//
  useEffect(() => {
    fetchStreamSingle(match.params.id);
  }, [fetchStreamSingle, match.params.id]);

  //==== Render Elements ====//
  const loadingEl = () => {
    return <div>Loading...</div>;
  };

  //==== Helper Function ====//
  const onSubmit = formValue => {
    updateStream(match.params.id, formValue);
  };

  return (
    <div>
      <h2>Stream Edit</h2>
      {!stream ? (
        loadingEl()
      ) : (
        <StreamForm
          onSubmit={onSubmit}
          // initialValues => redux form的input初始值，這裏的title和description來自redux from的Field，依據給的name作設定
          // <Field name="title" component={renderField} label="Enter Title" />  => StreamForm.js 第22行
          initialValues={{
            title: stream.title,
            description: stream.description,
          }}

          /* 這樣也可以，因為
           1. stream長這樣 {
                description: "3423432",
                id: 5
                title: "werwerwerwer"
                userId: "101199107453366234338"
              }

            2.因為stream裡面有title及description,所以可對到Field裡面的name
            3.如果將整個stream傳遞給redux-form, 納摸fromValue將會是stream的值 （除了以更新的, 如title, description）
            4.比較好的做法是指傳遞需要的值,這裏的userId和id不需要,最好就不要傳遞給redux from
          */
          // initialValues={stream}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStreamSingle, updateStream })(StreamEdit);
