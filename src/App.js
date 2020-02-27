import React, {useState} from 'react';
import './App.css';
import Form from './Calculator/form'

const App = () => {
  const [result, setResult] = useState([]);

  const calculate = (text) =>{
      
  };

  const resultView = () =>{
    return result;
  }

  return(
    <div className="calMain">
      <h1>Calculator</h1>
      <Form calculate={calculate} resultView={resultView}/>
    </div>
  )
}

export default App;
