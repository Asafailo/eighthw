import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import { render } from "react-dom";

export default class SecondApp extends React.Component{
 constructor(props){
     super(props);
     this.fourth=this.fourth.bind(this);
     this.fourthWrong=this.fourthWrong.bind(this);
     this.fifth=this.fifth.bind(this);
     this.sixth=this.sixth.bind(this);
    }
     
    fourth(){
         
        return(<div>Fourth right</div>)
        }

    fourthWrong(){
        return(<div>Fourth wrong</div>)
    }

    fifth(){
        return(<div>fifth </div>)
    }

    sixth(){
        return(<div>sixth</div>)
    }

render(){
    return(
        <Router>  
            <Link to="fourthpage">
    
            </Link>

            <Link to="fourthpage/one">

            </Link>

            <Link to="fifthpage">
            </Link>

            <Link to="sixthpage">
            
            </Link>

            <Switch> 
 
    <Route exact path="/fourthpage" component= {this.fourthWrong}>
    {this.fourthWrong}
    </Route>
  
   
    <Route exact path="/fourthpage/one" component= {this.fourthWrong}>   
    {this.fourthWrong}
    </Route>
  
  
    <Route exact  path="/fifthpage" component={this.fifth} >
    </Route>
   

    <Route exact  path="/sixthpage"  component={this.sixth}>    
    </Route>

</Switch>
</Router> 

);
}
}
