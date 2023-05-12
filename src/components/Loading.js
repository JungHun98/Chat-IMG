import '../App.css';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';

const MyStack = styled(Stack)({
  width: '800px',
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
  return (
    <MyStack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <ImageSkeleton animation="wave" variant="rectangular" width={256} height={256} />
      <ButtonGrid container wrap="nowrap">
        <Skeleton animation="wave" variant="rounded" width={100} height={50} /> 
        <Skeleton animation="wave" variant="rounded" width={100} height={50} />
      </ButtonGrid>
    </MyStack>
  )
}

export default Loading;
