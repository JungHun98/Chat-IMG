import '../css/ImageOption.css';
import { Component } from 'react';

class ImageOption extends Component {
  constructor(props){
    super(props);

    this.state = {
      mode: this.props._class,
      value: ''
    };
  }

  shouldComponentUpdate(newProps, newState){
    return newState.value !== this.state.value;
  }

  render() {
    
    let options = [<option value='' key=''>{this.props._label}</option>];
    const valueArr = this.props._values;

    valueArr.forEach((element, idx) => {
      options.push(
        <option value={element} key={idx}>{element}</option>
      );
    });

    console.log('ImageOption render');

    return (
      <div className={this.props._class}>
        {/* <label for={this.props._class + '-select'}>{this.props._label}</label> */}
        <select id={this.props._class + '-select'} 
        onChange={function (e) {
          console.log(e.target.value);
          this.setState({
            value: e.target.value
          });

          if(this.state.mode === 'size'){
            this.props.setSize(e.target.value);
          }
          else{
            this.props.setCount(e.target.value);
          }
          
        }.bind(this)}>
          {options}
        </select>
      </div>
    );
  }
}

export default ImageOption;
