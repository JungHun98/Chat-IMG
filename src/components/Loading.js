import React from 'react'
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
// import { useMediaQuery } from '@mui/material';

const MyStack = styled(Stack)({
  margin: 'auto',
  marginTop: '50px'
})

const ImageSkeleton = styled(Skeleton)({
  display: 'block',
  margin: 'auto'
})

const ButtonGrid = styled(Grid)({
  width: '256px',
  justifyContent: 'space-between',
  margin: 'auto !important',
  marginTop: '8px !important'
})

function Loading(props) {
  // const [image, setImage] = useState(undefined);
  const [{ imageSize, warning }, setSize] = useState({
    imageSize: 256,
    warning: false
  });
  
  // const matches = useMediaQuery('(min-width:600px)');
  
  // useEffect(()=>{
  //   console.log(props.image);
  //   setImage(props.image)
  // }, [props.image]);

  console.log(imageSize, warning);

  return (
    <MyStack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      {props.image ? (
        <div>
          <img src={props.image} alt="생성된 이미지" width={imageSize}
            style={{ transition: '0.3s' }} />
        </div>
      ) : (
        <ImageSkeleton animation="wave" variant="rectangular" width={256} height={256} />
      )}
      {props.image ? (
        <ButtonGrid container wrap="nowrap">
          <TextField
            id="outlined-number"
            label="이미지 크기"
            type="number"
            sx={{ width: '100px' }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              let state = {
                imageSize: 256,
                warning: ''
              }

              let size = Number(e.target.value);

              if (size) {
                if (size < 256) {
                  state.imageSize = 256;
                  state.warning = '작습니다. 256이상으로 설정해주십시오.';
                }
                else if (size > 1024) {
                  state.imageSize = 1024;
                  state.warning = '큽니다. 1024이하로 설정해주십시오.';
                }
                else {
                  state.imageSize = size;
                }
              }
              setSize(state);
            }
          }
          />
          <Button variant="outlined" onClick={(e) => {
            let img = new Image();
            img.src = props.image;
            img.width = 1024;
            img.height = 1024; // 설정값

            let canvas = document.createElement("canvas");
            canvas.width = imageSize;
            canvas.height = imageSize;

            let ctx = canvas.getContext("2d");
            // base64 resizing
            ctx.drawImage(img, 0, 0, imageSize, imageSize);
            
            // imgage download
            let a = document.createElement("a");
            a.href = canvas.toDataURL(); 
            a.download = "ChatIMG.png";
            a.click();
          }}>Download</Button>
        </ButtonGrid>
      ) : (
        <ButtonGrid container wrap="nowrap">
          <Skeleton animation="wave" variant="rounded" width={100} height={50} />
          <Skeleton animation="wave" variant="rounded" width={100} height={50} />
        </ButtonGrid>
      )}
      {warning ? (
        <Alert severity="warning">이미지의 크기가 너무 {warning}</Alert>
      ) : (null)}
    </MyStack>
  )
}

export default Loading;
