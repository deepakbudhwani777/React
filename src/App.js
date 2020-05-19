import React, {Component} from 'react';
import './App.css';
import Login from './Component/Login/Login'
import PersonDetails from './Component/PersonDetails/PersonDetaails'
import data from './Component/PersonDetails/person.json'

import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class App extends Component {


  state = {
    "person_details" : null,
    "login_details":{
      "username":"hruday@gmail.com",
      "password" :'hruday123' 
    }
  }

  loadJsonData=()=>{
    let person = data.user;
    this.setState({person_details:person})
  }

  handleSubmit=(user,pass)=>{
    if(user === this.state.login_details.username & pass === this.state.login_details.password)
    {
      console.log("Success");
      this.loadJsonData();
      this.props.history.push("/details");
    }
    else
    {
      window.alert("Incorrect email id or password");
    }

  }

  logOut=()=>{
    this.props.history.push("/")
  }

  render(){
  return (
 
    <div className="App">
      <Route path="/" exact> 
      <Login  click = {this.handleSubmit}/>
      </Route>
      <Route path="/details" exact>
      <PersonDetails dat={this.state.person_details} handleLogout={this.logOut}/>
      </Route>
    </div>
   
  );
}
}

export default withRouter(App);
