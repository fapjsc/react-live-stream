import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { fetchStreamList } from '../../actions';

const StreamList = props => {
  //==== Props ====//
  const { fetchStreamList, streams, currentUserId, isSignedIn } = props;

  //==== UseEffect ====//
  useEffect(() => {
    fetchStreamList();
  }, [fetchStreamList]);

  //==== Render Elements ====//
  const renderAdminBtnEl = stream => {
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  const renderStreamEl = streams.map(stream => (
    <div className="item" key={stream.id}>
      {renderAdminBtnEl(stream)}

      <i className="large middle aligned icon camera" />
      <div className="content">
        {stream.title}
        <div className="description">{stream.description}</div>
      </div>
    </div>
  ));

  const renderCreateStreamsBtnEl = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Streams
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderStreamEl}</div>
      {renderCreateStreamsBtnEl()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams), //將obj values轉為array
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreamList })(StreamList);
