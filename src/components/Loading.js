import '../App.css';
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const MyStack = styled(Stack)({
  margin: 'auto',
  marginTop: '50px'
})

const ImageSkeleton = styled(Skeleton)({
  display: 'block',
  margin: 'auto'
})

const imageBox = styled(Box)({
  margin: 'auto'
})

const ButtonGrid = styled(Grid)({
  width: '256px',
  justifyContent: 'space-between',
  margin: 'auto !important',
  marginTop: '8px !important'
})

function Loading(props) {
  const [image, setImage] = useState(`${process.env.PUBLIC_URL}/assets/sample_image.png`);
  const [{ imageSize, warning }, setSize] = useState({
    imageSize: 256,
    warning: false
  }
  );
  console.log(imageSize, warning);
  let img = true;

  return (
    <MyStack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      {image ? (
        <imageBox>
          <img src={image} alt="" width={imageSize}
            style={{ transition: '0.3s' }} />
        </imageBox>
      ) : (
        <ImageSkeleton animation="wave" variant="rectangular" width={256} height={256} />
      )}
      {image ? (
        <ButtonGrid container wrap="nowrap">
          <TextField
            id="outlined-number"
            label="Pixel"
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
            img.src = image;
            img.width = 256;
            img.height = 256;

            var canvas = document.createElement("canvas");
            canvas.width = imageSize;
            canvas.height = imageSize;

            var ctx = canvas.getContext("2d");
            // base64 resizing
            ctx.drawImage(img, 0, 0, imageSize, imageSize);

            var dataURL = canvas.toDataURL("image/png");
            dataURL.replace(/^data:image\/?[A-z]*;base64,/);

            // imgage download
            let a = document.createElement("a"); //Create <a>
            a.href = dataURL //Image Base64 Goes here
            a.download = "Image.png"; //File name Here
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
