import React, {Component} from 'react';
import asteroid from '../../common/asteroid';
import {FlatButton, TextField} from 'material-ui';
import Alert from 'react-s-alert';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
     username: '',
     password: '',
   };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleLogin(e){
    e.preventDefault();
    asteroid.loginWithPassword({
      password: this.state.password,
      username: this.state.username,
    })
      .catch((error) => {
        Alert.error(error.message);
      });
  };

  handleSignup(e){
    e.preventDefault();
    asteroid.createUser({
      password: this.state.password,
      username: this.state.username,
      profile:{
        aa:'aa',
        bb:'bb'
      }
    })
      .catch((error) => {
        Alert.error(error.message);
      });
    };

  handleUsername(e){
    this.setState(
      {
        username:e.target.value
      }
    );
  }

  handlePassword(e){
    this.setState(
      {
        password:e.target.value
      }
    );
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleLogin} className="login-form">
          <div>
            <TextField
               hintText="Username"
               name="username" value={this.state.username} onChange={this.handleUsername}
               floatingLabelText="Username"
             />
          </div>
          <div>
            <TextField type="password" name="password" value={this.state.password} onChange={this.handlePassword} floatingLabelText="Password" hintText="Password" />
          </div>
          <div>
            <FlatButton disabled> Hint: admin | pass</FlatButton>
          </div>
          <div>
            <FlatButton type="submit" className="submit-button" onClick={this.handleLogin}>Login</FlatButton>
            <FlatButton type="button" className="submit-button" onClick={this.handleSignup} >Sign Up</FlatButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
