import './App.css';
import Navbar from './Components/Navbar';
import TextField from './Components/TextField';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Components/About';

function App() {

  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000a44';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextCalci - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextCalci - Light Mode';
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
        <Router>
        <Navbar title="TextCalci" aboutname="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/">
            <TextField showAlert={showAlert} heading="Please Enter Your Text Here" mode={mode}/>
            </Route>
          </Switch>
        </div>
        </Router>
    </>
  );
}

export default App;
