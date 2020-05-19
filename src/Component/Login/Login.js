import React , { Component } from 'react';
import './Login.css'
class Login extends Component{

    passData=()=>{
        let user=document.getElementById("userId").value;
        let pass = document.getElementById("password").value;
        this.props.click(user,pass);
    }

    render(){
        return(
            
            <form >
                
                <input type="email" id="userId" name="userId" placeholder="Enter your User Id"/>
                <input type="password" id="password" name="password" placeholder="Enter Password"/>
                <div className="submit" onClick={this.passData}><h3>Submit</h3></div>
               
            </form>
            
        )

    }
}

export default Login;