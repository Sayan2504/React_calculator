import React, {useState} from 'react';
import './App.css';
import Form from './Calculator/form'

const App = () => {
  const [result, setResult] = useState([]);

  const calculate = (text) =>{
      if(text.includes("+")){
        var operator = text.indexOf("+");
        var operand1 = text.slice(0,operator);
        var operand2 = text.slice(operator+1,);
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        setResult( operand1 + operand2 );
      }

      if(text.includes("-")){
        var operator = text.indexOf("-");
        var operand1 = text.slice(0,operator);
        var operand2 = text.slice(operator+1,);
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        setResult( operand1 - operand2 );
      }

      if(text.includes("*")){
        var operator = text.indexOf("*");
        var operand1 = text.slice(0,operator);
        var operand2 = text.slice(operator+1,);
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        setResult( operand1 * operand2 );
      }

      if(text.includes("/")){
        var operator = text.indexOf("/");
        var operand1 = text.slice(0,operator);
        var operand2 = text.slice(operator+1,);
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        if(operand2 === 0){
          alert("Dividing by zero not possible");
        }
        else
          setResult( operand1 / operand2 );
      }

      if(text.includes("%")){
        var operator = text.indexOf("%");
        var operand1 = text.slice(0,operator);
        var operand2 = text.slice(operator+1,);
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        if(operand2 === 0){
          alert("Dividing by zero not possible");
        }
        else
          setResult( operand1 % operand2 );
      }
  };

  const resultView = () =>{
    return result;
  };

  return(
    <div className="cal-main">
      <h1>Calculator</h1>
      <Form calculate={calculate} resultView={resultView}/>
    </div>
  )
}

export default App;
