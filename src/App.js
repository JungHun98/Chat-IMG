import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const hadleSubmit = async (e) => {
    let prompt;

    e.preventDefault();
    debugger;
    await fetch('http://localhost:3001/translate',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message})
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      prompt = data.message.result.translatedText;
      console.log(data.message.result.translatedText);
    });

    console.log(`{"message": ${prompt}}`);

    await fetch('http://localhost:3001/',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message:prompt})
    })
    .then((res) => res.json())
    .then((data) => setResponse(data.message))
    .catch(error => console.log)

    console.log('done');
  };

  return (
    <div className="App">
      <form onSubmit={hadleSubmit}>
        <textarea
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
      <img src={response}></img>
      {/* <div>{response}</div> */}
    </div>
  );
}

export default App;
