import React, { Component } from 'react'
import Login from './Login';
import Signup from './Signup';

class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLogin : true
        }
    }

    changeLogin = () => {
        if(this.state.isLogin){
            this.setState({isLogin : false});
        }
        else{
            this.setState({isLogin : true});
        }
    }

  render() {
    return (
        <div>
        {
            this.state.isLogin ? <Signup /> : <Login />
        }
        
        <div>

        {
            this.state.isLogin 
            ?
            <p className="forgot-password">Already have an account ? 
            <button onClick={this.changeLogin}>Click here</button></p>
            :
            <p className="forgot-password">New User ? 
            <span onClick={this.changeLogin}> Click here</span></p>
        }

        </div>

        </div>

    )
  }
}

export default LoginComponent;