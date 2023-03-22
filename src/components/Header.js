import './Header.css';
import Main from './Main';
import { Route, Routes, Link } from 'react-router-dom';
import { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header id="header">
        <div className="header-con">
          <div className="project-name">
            IMAGE EDIT
          </div>
          <div className="main-link">
            <Link to='../../App'>Main</Link>
          </div>
          {/* <Routes>
            <Route path='/main'></Route>
          </Routes> */}
        </div>
      </header>
    );
  }
}

export default Header;
