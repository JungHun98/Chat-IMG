import './App.css';
import React from 'react'
import Header from './components/Header';
import Main from './components/Main';

function App(props) {

  console.log('App render');
  
  return (
    <div className="App">
      <Header>
      </Header>
      <Main>
      </Main>
      {/* <Routes>
          <Route exact path='/Chat-IMG' Component={Main}></Route>
          <Route path='/Main' Component={Main}></Route>
        </Routes> */}
    </div>
  )
}

export default App;
