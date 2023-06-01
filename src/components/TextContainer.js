import '../css/TextContainer.css';
import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function TextContainer(props) {
  const [prompt, setPrompt] = useState('');

  const translate = function (message) {
    const obj = {
      message: message
    }
    return fetch('https://port-0-chat-img-1aac2alg5t1jme.sel3.cloudtype.app/translate', {
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

    return fetch('https://port-0-chat-img-1aac2alg5t1jme.sel3.cloudtype.app/createImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
      .then((res) => {
        console.log(res);
        return res.json()
      })
      .then((res) => res?.images[0].image)
  }

  const hadleSubmit = async function (e) {
    e.preventDefault();
    const regex = /^[가-힣|a-z|A-Z|0-9|, ]+$/;

    if (regex.test(prompt)) {
      props.setMain('loading');
      props.setImage(undefined);

      try {
        const translatedText = await translate(prompt);
        console.log(translatedText);
        const baseCode = await getImages(translatedText);

        const imageUrls = 'data:image/png;base64,' + baseCode;

        console.log(imageUrls);
        props.setImage(imageUrls);
      }
      catch (e) {
        // props.setMain(error)

        console.log(e);
      }
    }
    else {
      // props.setMain('invalid')
      alert('유효하지 않은 요청입니다. 다시 입력해주세요');
    }
  }

  return (
    <section id='text-container'>
      <form onSubmit={hadleSubmit}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 800,
            margin: 'auto',
            marginTop: '20px'
          }}
        >
          <TextField
            fullWidth label="Prompt"
            id="fullWidth"
            sx={{
              display: 'block',
              maxWidth: '800px',
              width: '100%',
              margin: 'auto'
            }}
            onChange={(e) => {
              if(e.key === 'Enter'){
                hadleSubmit();
              }
              else{
                setPrompt(e.target.value);
              }
            }}
          />
          <Button sx={{
            position: 'absolute',
            right: '1%',
            top: '15%'
          }}
            type="submit"
            variant="contained"
            onClick={() => {
            }}>
            <SendIcon/>
          </Button>
          
        </Box>
      </form>
      {/* <img src={response}></img> */}
    </section>
  );

}

export default TextContainer;