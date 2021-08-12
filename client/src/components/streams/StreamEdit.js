import { useEffect } from 'react';
import { fetchStreamSingle } from '../../actions';
import { connect } from 'react-redux';

const StreamEdit = props => {
  //==== Props ====//
  const { fetchStreamSingle, match, stream } = props;
  //==== UseEffect ====//
  useEffect(() => {
    fetchStreamSingle(match.params.id);
  }, [fetchStreamSingle, match.params.id]);

  //==== Render Elements ====//
  const loadingEl = () => {
    return <div>Loading...</div>;
  };

  const streamEl = () => {
    return <div>{stream.title}</div>;
  };

  return (
    <div>
      <h1>Stream Edit</h1>
      {!stream ? loadingEl() : streamEl()}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStreamSingle })(StreamEdit);
