
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
      sizeOption: ['256x256', '512x512', '1024x1024'],
      countOption: count,
      imageSize: '256px'
    }

    this.setState = this.setState.bind(this);
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
      width: this.state.imageSize,
      height: this.state.imageSize,
      background:'black'
    }

    return (
      <section id='image-creator'>
        <div className='set-box'>
          <div className='image-attribute'>
            {this.getOption('size')}  
            {this.getOption('count')}
          </div>
        </div>
        <article id='image-box'>
          <div style={imgStyle}>사진</div>
        </article>
      </section>
    );
  }
}

export default ImageCreator;
