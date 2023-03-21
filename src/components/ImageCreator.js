import '../App.css';
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
    }
  }

  getOption(option){
    let _option;

    if(option === 'size'){
      _option = <ImageOption _class={option} _label='이미지 크기' _values={this.state.sizeOption}></ImageOption>
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
    return (
      <section id='image-creator'>
        <div class='set-box'>
          <div class='image-attribute'>
            {this.getOption('size')}  
            {this.getOption('count')}
          </div>
        </div>
        <div class='image-box'>
          <article>사진</article>
        </div>
      </section>
    );
  }
}

export default ImageCreator;
