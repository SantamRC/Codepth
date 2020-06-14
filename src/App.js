import React from 'react';
import NAV from './nav'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LOG from './login'

function App() {
  return (
    <div className="App">
      <Router>
        <NAV />
        <Route path='/login' exact component={LOG}></Route>
      </Router>
    </div>
  );
}

export default App;
