import '../App.css';
import { Component } from 'react';
import ImageCreator from './ImageCreator';
import TextContainer from './TextContainer';
import InitContent from './InitContent';

function Main(props) {

  
  let content = <InitContent></InitContent>;

  return (
    <main id='main'>
      {content}
    </main>
  );

}

export default Main;
