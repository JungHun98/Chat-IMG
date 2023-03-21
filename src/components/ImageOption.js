import '../App.css';
import { Component } from 'react';

class ImageOption extends Component {
  
  render() {
    
    let options = [<option value=''>{this.props._label}</option>];
    const valueArr = this.props._values;

    valueArr.forEach(element => {
      options.push(
        <option value={element}>{element}</option>
      );
    });
    return (
      <div class={this.props._class}>
        {/* <label for={this.props._class + '-select'}>{this.props._label}</label> */}
        <select id={this.props._class + '-select'}>
          {options}
        </select>
      </div>
    );
  }
}

export default ImageOption;
