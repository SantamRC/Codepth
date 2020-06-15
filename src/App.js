import React from 'react';
import NAV from './nav'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LOG from './login'
import DASH from './dashboard'
import CONTACT from './contact'
import ABOUT from './about'
import SIGN from './signup'

function App() {
  return (
    <div className="App">
      <Router>
        <NAV />
        <Route path='/login' exact component={LOG}></Route>
        <Route path='/signup' exact component={SIGN}></Route>
        <Route path='/dashboard' exact component={DASH}></Route>
        <Route path='/contactus' exact component={CONTACT}></Route>
        <Route path='/about' exact component={ABOUT}></Route>
      </Router>
    </div>
  );
}

export default App;
