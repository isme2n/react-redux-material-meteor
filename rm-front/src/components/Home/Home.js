import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component{
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
