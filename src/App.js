// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import React,{useState} from "react"
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
// let name="Argha"
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    // JSX 
    // here title is a prop that is passed to the component called Navbar
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <div className='container my-3'>
          <TextForm heading='Enter text to analyze below' mode={mode}/>
          {/* <About/> */}
        </div>
    </>
  );
}

export default App;
