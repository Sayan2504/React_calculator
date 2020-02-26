import React, {useState} from 'react';
import './App.css';
import Form from './Calculator/form'

const App = () => {
  const [result, setResult] = useState([]);

  const calculate = (operator, operand1, operand2) =>{
      if(operator.id === 1)
        setResult ( operand1 + operand2 );

      else if(operator.id === 2)
        setResult ( operand1 - operand2 );
      
      else if(operator.id === 3)
        setResult ( operand1 * operand2 );
      
      else if(operator.id === 4){
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
