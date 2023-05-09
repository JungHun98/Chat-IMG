import '../css/TextContainer.css';
import { Component } from 'react';

class TextContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: ''
    }
    this.hadleSubmit = this.hadleSubmit.bind(this);
  }

  translate(message){
    const obj = {
      message: message
    }
    return fetch('http://localhost:3001/translate',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    .then((response) => response.json())
    .then((data) => data.message.result.translatedText);
  }

  getImages(prompt){
    const obj = {
      message: prompt,
      imgInfo: this.props.imgInfo
    }

    return fetch('http://localhost:3001/createImage',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    .then((res) => res.json())
    .then((res) => res.images[0].image)
  }

  async hadleSubmit(e) {
    e.preventDefault();
    console.log(this.state.inputText);
    const translatedText = await this.translate(this.state.inputText);
    console.log(translatedText);
    
    const imageUrls = 'data:image/png;base64,' + await this.getImages(translatedText);
    
    this.props.setImgUrls(imageUrls);
  }

  render() {
    console.log(this.props.imgInfo);

    console.log('TextContainer render');
    let textBox = {
      maxWidth: '600px',
      margin: 'auto'
    }

    let textareaStyle = {
      display: 'block',
      width: '600px',
      height: '100px',
      margin: 'auto',
      padding: '5px',
      borderRadius: '10px'
    }

    let submitButtonStyle = {
      width: '80px',
      height: '30px',
      borderRadius: '10px',
      color: 'white',
      backgroundColor: '#000000',
      marginTop: '10px',
      float: 'right',
      cursor: 'pointer'
    }
    
    return (
      <section id='text-container'>
        <form onSubmit={this.hadleSubmit}>
          <div className='text-box' style={textBox}>
            <textarea
              style={textareaStyle}
              value={this.state.inputText}
              onChange={function(e) {
                
                this.setState({
                  inputText: e.target.value
                });
                console.log(this.state.inputText);
              }.bind(this)}
            ></textarea>
            <button
              type='submit'
              style={submitButtonStyle}>
              Submit
            </button>
          </div>
        </form>
        {/* <img src={response}></img> */}
      </section>
    );
  }
}

export default TextContainer;