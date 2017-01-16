
import React, { Component } from 'react';
import {AppBar, FlatButton, Paper ,FontIcon, Drawer} from 'material-ui';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import './TopBar.css';
import Logged from './Logged'
import asteroid from '../../common/asteroid';

class TopBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: this.props.logged,
      isLeftDrawerOpened: false
    };
  }

  toggleLeftDrawer() {
    this.setState({ isLeftDrawerOpened: !this.state.isLeftDrawerOpened });
  }

  handleLogout(){
    asteroid.logout();
  }

  render() {
    return (
      <Paper className="top-bar">
        <AppBar
          title="React + Redux + Material x Meteor"
          style={{backgroundColor:'#000'}}
          onLeftIconButtonTouchTap={() => this.toggleLeftDrawer()}
          iconElementRight={this.state.logged ? <Logged /> : <FlatButton {...this.props} label="Login" />}
        />
        <Drawer
          open={this.state.isLeftDrawerOpened}
          docked={false}
          onRequestChange={() => this.toggleLeftDrawer()}
        >
          <List>
            <ListItem
              disabled
              leftAvatar={
                <Avatar icon={<FontIcon className="material-icons">face</FontIcon>} />
              }
              primaryText="Your Name"
              secondaryText="your-email@mail.com"
            />
            <Divider />

            <ListItem
              primaryText="Home"
              leftIcon={<FontIcon className="material-icons">home</FontIcon>}
            />
            <ListItem
              primaryText="Shopping"
              leftIcon={<FontIcon className="material-icons">shopping</FontIcon>}
            />
            <ListItem
              primaryText="Order"
              leftIcon={<FontIcon className="material-icons">local_offer</FontIcon>}
            />
            <ListItem
              primaryText="About"
              leftIcon={<FontIcon className="material-icons">grade</FontIcon>}
            />
            <Divider />

            <ListItem
              primaryText="Settings"
              leftIcon={<FontIcon className="material-icons">settings</FontIcon>}
            />
            <ListItem
              primaryText="Help & feedback"
              leftIcon={<FontIcon className="material-icons">help</FontIcon>}
            />
            <ListItem
              primaryText="Logout"
              onClick={this.handleLogout}
              leftIcon={<FontIcon className="material-icons">remove_circle_outline</FontIcon>}
            />
          </List>
        </Drawer>
      </Paper>
    );
  }
}

export default TopBar;
