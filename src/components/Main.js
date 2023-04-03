import '../App.css';
import { Component } from 'react';
import  ImageCreator from './ImageCreator';
import  TextContainer from './TextContainer';

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {
      imgSize: '256',
      imgCount: 1,
      imgUrls: []
    };

    this.setImgSize = this.setImgSize.bind(this);
    this.setImgCount = this.setImgCount.bind(this);
    this.setImgUrls = this.setImgUrls.bind(this);
  }

  // textcontainer에 이미지 정보 props로 전달하기

  setImgSize(newSize){
    this.setState({
      imgSize: newSize
    })
  }

  
  setImgCount(newCount){
    this.setState({
      imgCount: newCount
    })
  }

  setImgUrls(newUrls){
    this.setState({
      imgUrls: newUrls
    })
  }

  render(){
    console.log('Main render');

    debugger;
    return(
      <main id='main'>
        <ImageCreator imgInfo={this.state} setImgSize={this.setImgSize} setImgCount={this.setImgCount}></ImageCreator>
        <TextContainer imgInfo={this.state} setImgUrls={this.setImgUrls}></TextContainer>
      </main>
    );
  }
}

export default Main;
