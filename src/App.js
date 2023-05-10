import './App.css';
// import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
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
      <Box
        sx={{
          width: 800,
          maxWidth: '100%',
          margin: 'auto',
          marginTop: '20px'
        }}
      >
        <TextField fullWidth label="Prompt" id="fullWidth" sx={{
          margin: 'auto'
        }}/>
        <Button variant="contained">
          Send
        </Button>
      </Box>

    </div>
  )
}

export default App;
