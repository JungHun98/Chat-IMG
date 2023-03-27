import '../css/ImageCreator.css'
import { Component } from 'react';
import ImageOption from './ImageOption';

class ImageCreator extends Component {
  constructor(props){
    super(props);
    let count = [];
    for (let index = 1; index <= 10; index++) {
      count.push(index);
    }

    this.state = {
      sizeOption: ['256', '512', '1024'],
      countOption: count,
      imageSize: '256'
    }

    this.setImageSize = this.setImageSize.bind(this);
  }

  setImageSize(pixel){
    this.setState({
      imageSize: pixel
    })
  }

  getOption(option){
    let _option;

    if(option === 'size'){
      _option = <ImageOption _class={option} _label='이미지 크기' _values={this.state.sizeOption} setSize={this.setImageSize}></ImageOption>
    }
    else if(option === 'count'){
      _option = <ImageOption _class={option} _label='이미지 개수' _values={this.state.countOption}></ImageOption>
    }
    else{
      _option = 'option Input error';
    }

    return _option;
  }

  render() {
    const imgStyle={
      margin: 'auto',
      width: this.state.imageSize + 'px',
      height: this.state.imageSize + 'px',
      background:'black',
      transition: '0.3s'
    }
    
    console.log('ImageCreator render');

    return (
      <section id='image-creator'>
        <div className='set-box'>
          <div className='image-attribute'>
            {this.getOption('size')}  
            {this.getOption('count')}
          </div>
        </div>
        <article id='image-box'>
          <div className='image-div' style={imgStyle}>사진</div>
        </article>
      </section>
    );
  }
}

export default ImageCreator;
