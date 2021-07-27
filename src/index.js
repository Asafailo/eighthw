import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstApp from './components/appone/App';
import SecondApp from './components/apptwo/index';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Link to ="/first">First Page
   </Link>

   <Link to ="/second">Second Page
   </Link>

<Switch>

  <Route exact path="/first">
<FirstApp/>
  </Route>
<Route exact path="second">
  <SecondApp/>
</Route>

</Switch>

   </Router>
  </React.StrictMode>,

  document.getElementById('root')
);