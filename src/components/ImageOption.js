import '../css/ImageOption.css';
import { Component } from 'react';

class ImageOption extends Component {
  // 이미지 개수 옵션 예외 처리 해야함
  render() {
    
    let options = [<option value='' key=''>{this.props._label}</option>];
    const valueArr = this.props._values;

    valueArr.forEach((element, idx) => {
      
      let size = element + 'x' + element;
      options.push(
        <option value={element} key={idx}>{size}</option>
      );
    });
    console.log('ImageOption render');

    return (
      <div className={this.props._class}>
        {/* <label for={this.props._class + '-select'}>{this.props._label}</label> */}
        <select id={this.props._class + '-select'} 
        onChange={function (e) {
          console.log(e.target.value);
          this.props.setSize(e.target.value);
        }.bind(this)}>
          {options}
        </select>
      </div>
    );
  }
}

export default ImageOption;
