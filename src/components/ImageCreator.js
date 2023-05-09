import '../css/ImageCreator.css'
import { Component } from 'react';
import ImageOption from './ImageOption';

class ImageCreator extends Component {
  constructor(props){
    super(props);
    let count = [];
    for (let index = 1; index <= 1; index++) {
      count.push(index);
    }

    this.state = {
      sizeOption: ['256', '512', '1024'],
      countOption: count,
      imgs: []
    }

    this.getOption = this.getOption.bind(this);
  }

  // 메인 컴포넌트의 값을 세팅해야 함
  

  getOption(option){
    let _option;

    if(option === 'size'){
      _option = <ImageOption _class={option} _label='이미지 크기' _values={this.state.sizeOption} setSize={this.props.setImgSize}></ImageOption>
    }
    else if(option === 'count'){
      _option = <ImageOption _class={option} _label='이미지 개수' _values={this.state.countOption} setCount={this.props.setImgCount}></ImageOption>
    }
    else{
      _option = 'option Input error';
    }

    return _option;
  }

  componentDidUpdate(prevProps) {
    // 전형적인 사용 사례 (props 비교를 잊지 마세요)
    if (this.props.imgInfo.imgUrls !== prevProps.imgInfo.imgUrls) {
      this.setState({
        imgs: this.props.imgInfo.imgUrls
      })
    }
  }

  render() {
    let url;
    const imgStyle={
      margin: 'auto',
      width: this.props.imgInfo.imgSize + 'px',
      height: this.props.imgInfo.imgSize + 'px',
      border: '1px solid black',
      transition: '0.3s'
    }
    let imgContent;
    
    if(!this.props.imgInfo.imgUrls){
      url = this.props.imgInfo.imgUrls;
      imgContent = <img src={url} alt='사진' width={this.props.imgInfo.imgSize}></img>;
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
          <div className='image-div' style={imgStyle}>
            {imgContent}
          </div>
        </article>
      </section>
    );
  }
}

export default ImageCreator;
