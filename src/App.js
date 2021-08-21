import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextField from './Components/TextField';
import React, { useState } from 'react'

function App() {

  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000a44';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextCalci" aboutname="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextField heading="Please Enter Your Text Here" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
