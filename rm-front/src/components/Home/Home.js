import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

var bb=[];


class Home extends Component{
  constructor(props)
  {
    super(props);

    asteroid.call("getUsers")
    .then(result => {
        bb=result;
    })
    .catch(error => {
        console.log("Error");
        console.error(error);
    });
    
  }
  handleLogout(){
    asteroid.logout();
  };

  render() {
    const { user } = this.props;
    if (user && user.username) {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <div className="logout">
                Logged user: {user.username}<br/>
                <RaisedButton onClick={this.handleLogout} className="logout-button">Logout</RaisedButton>
              </div>
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <RaisedButton fullWidth={true} disabled={true} style={{margin:'5px'}}> All of the User List </RaisedButton>
            {bb.map((t, i) =>
              <RaisedButton style={{margin:'5px'}} key={i}> {t.username} </RaisedButton> ) }
          </div>
        </div>
      );
    }
    return <Login />;
  };
}

Home.propTypes = {
  user: React.PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
