import '../css/TextContainer.css';
import { Component } from 'react';

class TextContainer extends Component {
  render() {
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
        <form /*onSubmit={hadleSubmit}*/>
          <div className='text-box' style={textBox}>
            <textarea
              style={textareaStyle}
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
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