// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
// let name="Argha"
function App() {
  return (
    // JSX 
    // here title is a prop that is passed to the component called Navbar
    <>
        <Navbar title="TextUtils"/>
        <div className='container my-3'>
          <TextForm heading='Enter text to analyze below'/>
          {/* <About/> */}
        </div>
    </>
  );
}

export default App;
