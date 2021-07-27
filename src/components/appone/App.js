import './App.css';
import React from "react";
import { BrowserRouter as Router,
Switch,
Link,
Route} from 'react-router-dom';

export default function FirstApp() {
  return (
    <Router>
      <div> 
      <Link to ="/firstpage"> 
      <PageOne/>
      </Link>
      </div>

      <div> 
      <Link to ="/secondpage"> 
      <PageTwo />
      </Link>
      </div>

      <div> 
      <Link to ="/thirdpage"> 
      <PageThree />
      </Link>
      </div>

    </Router>
  );
}

function PageOne() {
  return <div>Page one</div>
}

function PageTwo(){
  return <div>Page two</div>
}

function PageThree() {
  return <div>Page three</div>
}
