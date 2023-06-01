import '../App.css';
import React from 'react'
import { useState } from 'react';

import InitContent from './InitContent';
import Loading from './Loading';
import TextContainer from './TextContainer';
import Box from '@mui/material/Box';

function Main(props) {
  const [mainState, setMain] = useState('init');
  const [imageCode, setImage] = useState(undefined);
  let content;

  if(mainState === 'init'){
    content = <InitContent></InitContent>
  }
  else if(mainState === 'loading'){
    content = <Loading image={imageCode}></Loading>
  }
  else{
    content = `state error: mainconent is ${mainState}`;
  }
  // useEffect(()=>{
  //   if(mainState !== 'init'){
  //     if(mainState === 'loading'){
  //       console.log('loading');
        
  //     }
  //     else{
        
  //     }
  //   }
  // }, [mainState, imageCode])
  console.log('Main rendering');
  return (
    <main id='main'>
      {content}
      <Box
        sx={{
          width: '100%',
          maxWidth: 800,
          margin: 'auto',
          marginTop: '20px'
        }}
      >
        <TextContainer setImage={setImage} setMain={setMain}></TextContainer>
      </Box>
    </main>
  );
}

export default Main;