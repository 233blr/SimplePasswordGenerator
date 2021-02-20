import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [pass, setPass] = useState('Password Generator')
  const [passLength, setPassLength] = useState(15);
  const [passCopied, setPassCopied] = useState(false);

  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ';
  const symbols = '!@#$%^&()_+?:{}[]';

  const rangeValue = (e) => setPassLength(e.target.value);

  const handlePassCopy = () => {
    if (pass !== 'Password Generator') {
      let timerId = null;
      navigator.clipboard.writeText(pass)
      setPassCopied(true)
      setTimeout(() => setPassCopied(false),
        1000)
    }
  };

  const handelPassGenerator = () => {
    let result = '';
    if (passLength > 10) chars += symbols;
    for (let i = 0; i < passLength; i++) {
      const runNum = Math.floor(Math.random() * chars.length);
      result += chars.substring(runNum, runNum + 1)
    }
    setPass(result);
  }

  return (
    <div className="App">
      {passCopied && <span>Copied !</span>}
      <h1 onClick={handlePassCopy} className='pass_output'>{pass}</h1>
      <div>
        <p>password complexity</p>
        <input type="range" min="5" max="20" step="5" onChange={rangeValue} />
      </div>
      <button onClick={handelPassGenerator}>Generate</button>
    </div>
  );
}

export default App;
