import React, {Component} from 'react';
import BottomBar from '../BottomBar';
import TopBar from '../TopBar';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import './Main.css';


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
       selectedIndex: 0
    };
  }

  select = (index) => this.setState({
    selectedIndex: index
  });

  render(){
    return (
      <div>
        <section className="section">
          <TopBar logged={true}/>
            <div className="container" >
              {this.props.children}
            </div>
          <BottomBar />
        </section>
        <Alert className="alert" position="top-right" effect="jelly"/>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default Main;
