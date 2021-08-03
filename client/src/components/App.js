import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import StreamList from '../components/streams/StreamList';
import StreamCreate from '../components/streams/StreamCreate';
import StreamEdit from '../components/streams/StreamEdit';
import StreamDelete from '../components/streams/StreamDelete';
import StreamShow from '../components/streams/SteamShow';

// Layout
import Header from './layout/Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={StreamList} exact path="/" />
          <Route component={StreamCreate} exact path="/streams/new" />
          <Route component={StreamEdit} exact path="/streams/edit" />
          <Route component={StreamDelete} exact path="/streams/delete" />
          <Route component={StreamShow} exact path="/streams/show" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
