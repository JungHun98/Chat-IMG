import '../css/Header.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
      linkState : 'main',
      path: '/Main'
    }

    this.setLink = this.setLink.bind(this);
  }

  setLink(e) {
    if(e.target.className === 'main'){
      this.setState({
        linkState : 'home',
        path: '/'
      });
    }
    else{
      this.setState({
        linkState : 'main',
        path: '/Main'
      });
    }
    // this.setState()
  }

  render() {
    console.log('Header render');

    return (
      <header id="header">
        <div className="header-con">
          <div className="project-name">
            <Link className='home' to='/' onClick={this.setLink}>IMAGE EDIT</Link>            
          </div>
          {/* <div className={this.state.linkState + "-link"} >
            <Link className={this.state.linkState} to={this.state.path} onClick={this.setLink}>{this.state.linkState}</Link>
          </div> */}
        </div>
      </header>
    );
  }
}

export default Header;
