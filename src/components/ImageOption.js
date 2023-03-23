import './ImageOption.css';
import { Component } from 'react';

class ImageOption extends Component {
  
  render() {
    
    let options = [<option value='' key=''>{this.props._label}</option>];
    const valueArr = this.props._values;

    valueArr.forEach((element, idx) => {
      options.push(
        <option value={element} key={idx}>{element}</option>
      );
    });
    return (
      <div className={this.props._class}>
        {/* <label for={this.props._class + '-select'}>{this.props._label}</label> */}
        <select id={this.props._class + '-select'} onChange={this.props.setImageSize()}>
          {options}
        </select>
      </div>
    );
  }
}

export default ImageOption;
