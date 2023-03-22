import '../App.css';
import { Component } from 'react';

class TextContainer extends Component{
  
  render(){
    return(
      <section id='text-container'>
        <div className='text-box'>
          <textarea></textarea>
          <button>생성</button>
        </div>
      </section>
    );
  }
}

export default TextContainer;