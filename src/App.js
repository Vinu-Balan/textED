import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

 
function App() {
  const[mode, setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg :message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='black';
      showAlert("Dark mode has been enabled!","success ");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled!","success ");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="textED" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/"
          element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze: " mode={mode}/>}
          />
        </Routes>
      </div>
      </Router>
    </> 

  );
}

export default App;
   