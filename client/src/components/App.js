import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';

function App() {
  return (
      <div className="ui container">
        <BrowserRouter>
          <Header/>
          <div>
            <Route path="/" exact component={StreamList}/>
            <Route path="/streams/show" exact component={StreamShow}/>
            <Route path="/streams/create" exact component={StreamCreate}/>
            <Route path="/streams/delete" exact component={StreamDelete}/>
            <Route path="/streams/edit" exact component={StreamEdit}/>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;