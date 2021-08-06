import { useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { trySignIn, trySignOut } from '../actions';
import { Button, Menu, Loader, Icon } from 'semantic-ui-react';

const GoogleAuth = ({ trySignOut, trySignIn, signState }) => {
  const auth = useRef('');

  const handleAuthChange = useCallback(
    signState => {
      if (signState) {
        trySignIn(auth.current.currentUser.get().getId());
      } else {
        trySignOut();
      }
    },
    [trySignIn, trySignOut]
  );

  const onSignOutClickHandler = () => {
    auth.current.signOut();
  };

  const onSignInClickHandler = () => {
    auth.current.signIn({ prompt: 'select_account' });
  };

  useEffect(() => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'email',
      });

      auth.current = window.gapi.auth2.getAuthInstance();
      auth.current.isSignedIn.listen(handleAuthChange);
      handleAuthChange(auth.current.isSignedIn.get());
    });
  }, [handleAuthChange]);

  const authButtonEl = () => {
    if (signState === null) return <Loader active inline />;
    if (signState)
      return (
        <Button color="google plus" onClick={onSignOutClickHandler}>
          <Icon name="google" />
          Sign Out
        </Button>
      );
    if (!signState)
      return (
        <Button color="google plus" onClick={onSignInClickHandler}>
          <Icon name="google" />
          Sign In with Google
        </Button>
      );
  };

  return <Menu.Item>{authButtonEl()}</Menu.Item>;
};

const mapStateToProps = state => {
  return {
    signState: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { trySignIn, trySignOut })(GoogleAuth);
