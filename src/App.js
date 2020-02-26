import React, {useState} from 'react';
import './App.css';
import Form from './Calculator/form'

const App = () => {
  const [result, setResult] = useState([]);

  const calculate = (operator, operand1, operand2) =>{
      if(operator === 1){
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        setResult ( operand1 + operand2 );
      }
        

      else if(operator === 2){
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        setResult ( operand1 - operand2 );
      }
      
      else if(operator === 3){
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        setResult ( operand1 * operand2 );
      }
      
      else if(operator === 4){
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        if (operand2 === 0)
          alert("divisor cannot be zero");
        else
          setResult ( operand1 / operand2 );
      }
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
