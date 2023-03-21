import '../App.css';
import { Component } from 'react';

class Header extends Component{
  
  render(){
    return(
      <header id="header">
        <div id="project-name">
          IMAGE EDIT
        </div>
        <div id="main-link">
          <a href='#'>Main</a>  
        </div>
      </header>
    );
  }
}

export default Header;
