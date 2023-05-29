// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import React, { useState } from "react"
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert';
import {createRoot} from 'react-dom/client'
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  // function dismissAlert() {
  //   var alertElement = document.querySelector('#alert')
  //   // Check if the alert element still exists
  //   if (alertElement && alertElement.parentNode) {
  //     // Remove the alert element from its parent
  //     setAlert(null)
  //     alertElement.parentNode.removeChild(alertElement);
  //   }
  //   else {
  //     const div = document.querySelector('.classAlert');
  //     //var newAlert = React.createElement('Alert',{alert:{alert}});
  //     //ReactDOM.render(newAlert,div)
  //     const root = createRoot(div);
  //     root.render(<Alert alert={alert}/>);
  //   }
  // }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    //setTimeout(dismissAlert, 2000);
    setTimeout(()=>{setAlert(null)},1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    // JSX 
    // here title is a prop that is passed to the component called Navbar
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="classAlert">
        <Alert alert={alert} />
      </div>

      <div className='container my-3'>
        <TextForm heading='Enter text to analyze below' mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
