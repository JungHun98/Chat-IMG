import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
// import SendIcon from '@mui/icons-material/Send'

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
