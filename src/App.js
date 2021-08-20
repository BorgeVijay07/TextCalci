import './App.css';
import Navbar from './Components/Navbar';
import TextField from './Components/TextField';

function App() {
  return (
    <>
      <Navbar title="TextCalci" aboutname="About"/>
      <div className="container my-3">
        <TextField heading="Please Enter Your Text Here"/>
      </div>
    </>
  );
}

export default App;
