import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [pass, setPass] = useState('Password Generator')
  const [passLength, setPassLength] = useState(15);
  const [passCopied, setPassCopied] = useState(false);

  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ';
  const symbols = '!@#$%^&()_+?:{}[]';

  const rangeValue = (event) => {
    setPassLength(event.target.value);
    let result = '';
    if (passLength > 10) chars += symbols;
    for (let i = 0; i < passLength; i++) {
      const runNum = Math.floor(Math.random() * chars.length);
      result += chars.substring(runNum, runNum + 1)
    }
    setPass(result);
  }

  const handlePassCopy = () => {
    if (pass !== 'Password Generator') {
      navigator.clipboard.writeText(pass)
      setPassCopied(true)
      setTimeout(() => setPassCopied(false),
        1000)
    }
  };

  return (
    <div className="App">
      {passCopied && <span>Copied !</span>}
      <h1 onClick={handlePassCopy} className='pass_output'>{pass}</h1>
      <div>
        <p>password complexity</p>
        <p className='message'>move to generate</p>
        <input type="range" min="5" max="25" step="1" onChange={rangeValue} />
      </div>
    </div>
  );
}

export default App;
