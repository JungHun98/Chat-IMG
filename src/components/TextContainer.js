import '../css/TextContainer.css';
import {  useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TextContainer(props) {
  const [prompt, setPrompt] = useState('');

  const translate = function (message) {
    const obj = {
      message: message
    }
    return fetch('http://localhost:3001/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
      .then((response) => response.json())
      .then((data) => data.message.result.translatedText);
  }

  const getImages = function (prompt) {
    const obj = {
      message: prompt
    }

    return fetch('http://localhost:3001/createImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
      .then((res) => res.json())
      .then((res) => res.images[0].image)
  }

  const hadleSubmit = async function (e) {
    e.preventDefault();
    if (prompt) {
      console.log(prompt);
      const translatedText = await translate(prompt);
      console.log(translatedText);

      const imageUrls = 'data:image/png;base64,' + await getImages(translatedText);

      console.log(imageUrls);
      props.setImage(imageUrls);
    }
  }

  console.log('TextContainer render');

  return (
    <section id='text-container'>
      <form onSubmit={hadleSubmit}>
        <Box
          sx={{
            width: 800,
            maxWidth: '100%',
            margin: 'auto',
            marginTop: '20px'
          }}
        >
          <TextField
            fullWidth label="Prompt"
            id="fullWidth"
            sx={{
              margin: 'auto'
            }}
            onChange={(e) => {
              setPrompt(e.target.value)
            }}
          />
          <Button type="submit" variant="contained" onClick={()=>{
            props.setMain('loading');
            props.setImage(undefined);
          }}>
            Send
          </Button>
        </Box>
      </form>
      {/* <img src={response}></img> */}
    </section>
  );

}

export default TextContainer;