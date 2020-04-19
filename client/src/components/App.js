import React from 'react';
import {Router, Switch} from 'react-router-dom';
import {Route} from 'react-router';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import history from '../history';
import StreamShow from './streams/StreamShow';

function App() {
  return (
      <div className="ui container">
        <Router history={history}>
          <Header/>
          <Switch>
            <Route path="/" exact component={StreamList}/>
            <Route path="/streams/new" exact component={StreamCreate}/>
            <Route path="/streams/edit/:id" exact component={StreamEdit}/>
            <Route path="/streams/delete/:id" exact
                   component={StreamDelete}/>
            <Route path="/streams/:id" exact component={StreamShow}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;