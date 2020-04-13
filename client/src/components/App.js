import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router'

function RouteOne() {
  return (
      <div>
        One
      </div>
  )
}

function RouteTwo() {
  return (
      <div>
        Two
      </div>
  )
}


function App() {

  return (
      <div>
        <BrowserRouter>
          <Route path="/component1" component={RouteOne}/>
          <Route path="/component2" component={RouteTwo}/>
        </BrowserRouter>
      </div>
  )

}

export default App;