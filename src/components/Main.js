import '../App.css';
import { Component } from 'react';
import  ImageCreator from './ImageCreator';
import  TextContainer from './TextContainer';

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {
      imgSize: '',
      imgCount: 0
    };

    this.setMainState = this.setMainState.bind(this);
  }

  setMainState(newSize, newCount){
    this.setState({
      imgSize: newSize,
      imgCount: newCount
    })
  }

  render(){
    console.log('Main render');

    return(
      <main id='main'>
        <ImageCreator imgInfo={this.state}></ImageCreator>
        <TextContainer></TextContainer>
      </main>
    );
  }
}

export default Main;
