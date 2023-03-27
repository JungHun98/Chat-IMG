import '../App.css';
import { Component } from 'react';
import  ImageCreator from './ImageCreator';
import  TextContainer from './TextContainer';

class Main extends Component{
  
  render(){
    console.log('Main render');

    return(
      <main id='main'>
        <ImageCreator></ImageCreator>
        <TextContainer></TextContainer>
      </main>
    );
  }
}

export default Main;
