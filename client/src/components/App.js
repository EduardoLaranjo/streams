import React from 'react';
import {Router} from 'react-router-dom';
import {Route} from 'react-router';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import history from '../history';

function App() {
  return (
      <div className="ui container">
        <Router history={history}>
          <Header/>
          <div>
            <Route path="/" exact component={StreamList}/>
            <Route path="/streams/new" exact component={StreamCreate}/>
            <Route path="/streams/edit/:id" exact component={StreamEdit}/>
            <Route path="/streams/delete" exact component={StreamDelete}/>
          </div>
        </Router>
      </div>
  );
}

export default App;