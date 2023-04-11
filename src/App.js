import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {

  render(){
    console.log('App render');

    return (

      <div className="App">
        <Header>
        </Header>
        <Routes>
          <Route exact path='/'></Route>
          <Route path='/Main' Component={Main}></Route>
        </Routes>
  
        {/* <form onSubmit={hadleSubmit}>
          <textarea
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
        <img src={response}></img> */}
      </div>
    );
  }
  
}

export default App;
