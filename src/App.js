import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextField from './Components/TextField';
import React, { useState } from 'react'
import Alert from './Components/Alert';

function App() {

  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000a44';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar title="TextCalci" aboutname="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextField showAlert={showAlert} heading="Please Enter Your Text Here" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
