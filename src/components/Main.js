import '../App.css';
import { useEffect, useState } from 'react';

import InitContent from './InitContent';
import Loading from './Loading';
import TextContainer from './TextContainer';
import Box from '@mui/material/Box';

function Main(props) {

  const [mainState, setMain] = useState('init');
  const [mainContent, setContent] = useState();
  const [imageCode, setImage] = useState(undefined);

  useEffect(()=>{

    if(mainState === 'init'){
      setContent(<InitContent></InitContent>)
    }
    else if(mainState === 'loading'){
      setContent(<Loading image={imageCode}></Loading>)
    }
    else{
      setContent(`state error: mainconent is ${mainState}`);
    }
  }, [mainState, imageCode])
  
  return (
    <main id='main'>
      {mainContent}
      <Box
        sx={{
          width: 800,
          maxWidth: '100%',
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