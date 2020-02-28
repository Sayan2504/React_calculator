import React, {useState} from 'react';
import './App.css';
import Form from './Calculator/form'

const App = () => {
  const [result, setResult] = useState("");

  const calculate = (text) =>{
    if(text.includes("+") || text.includes("-") || text.includes("*") || text.includes("/") || text.includes("%")){
      if(text.includes("+")){
        var operator = text.indexOf("+");
        var operand1 = text.slice(0,operator);
        var operand2 = text.slice(operator+1,);
        if(operand1.includes("+") || operand1.includes("-") || operand1.includes("*") || operand1.includes("/") || operand1.includes("%")){
          alert("Binary operations only");
          setResult("");
        }
        else if(operand2.includes("+") || operand2.includes("-") || operand2.includes("*") || operand2.includes("/") || operand2.includes("%")){
          alert("Binary operations only");
          setResult("");
        }
        else{
          operand1 = parseInt(operand1);
          operand2 = parseInt(operand2);
          setResult( operand1 + operand2 );
        }
      }

      else if(text.includes("-")){
        var operator = text.indexOf("-");
        var operand1 = text.slice(0,operator);
        var operand2 = text.slice(operator+1,);
        if(operand1.includes("+") || operand1.includes("-") || operand1.includes("*") || operand1.includes("/") || operand1.includes("%")){
          alert("Binary operations only");
          setResult("");
        }
        else if(operand2.includes("+") || operand2.includes("-") || operand2.includes("*") || operand2.includes("/") || operand2.includes("%")){
          alert("Binary operations only");
          setResult("");
        }
        else{
          operand1 = parseInt(operand1);
          operand2 = parseInt(operand2);
          setResult( operand1 - operand2 );
        }
      }

      else if(text.includes("*")){
        var operator = text.indexOf("*");
        var operand1 = text.slice(0,operator);
        var operand2 = text.slice(operator+1,);
        if(operand1.includes("+") || operand1.includes("-") || operand1.includes("*") || operand1.includes("/") || operand1.includes("%")){
          alert("Binary operations only");
          setResult("");
        }
        else if(operand2.includes("+") || operand2.includes("-") || operand2.includes("*") || operand2.includes("/") || operand2.includes("%")){
          alert("Binary operations only");
          setResult("");
        }
        else{
          operand1 = parseInt(operand1);
          operand2 = parseInt(operand2);
          setResult( operand1 * operand2 );
        }
      }

      else if(text.includes("/")){
        var operator = text.indexOf("/");
        var operand1 = text.slice(0,operator);
        var operand2 = text.slice(operator+1,);
        if(operand1.includes("+") || operand1.includes("-") || operand1.includes("*") || operand1.includes("/") || operand1.includes("%")){
          alert("Binary operations only");
          setResult("");
        }
        else if(operand2.includes("+") || operand2.includes("-") || operand2.includes("*") || operand2.includes("/") || operand2.includes("%")){
          alert("Binary operations only");
          setResult("");
        }
        else{
          operand1 = parseInt(operand1);
          operand2 = parseInt(operand2);
          if(operand2 === 0){
            alert("Dividing by zero not possible");
          }
          else
            setResult( operand1 / operand2 );
        }
      }

      else if(text.includes("%")){
        var operator = text.indexOf("%");
        var operand1 = text.slice(0,operator);
        var operand2 = text.slice(operator+1,);
        if(operand1.includes("+") || operand1.includes("-") || operand1.includes("*") || operand1.includes("/") || operand1.includes("%")){
          alert("Binary operations only");
          setResult("");
        }
        else if(operand2.includes("+") || operand2.includes("-") || operand2.includes("*") || operand2.includes("/") || operand2.includes("%")){
          alert("Binary operations only");
          setResult("");
        }
        else{
          operand1 = parseInt(operand1);
          operand2 = parseInt(operand2);
          if(operand2 === 0){
            alert("Dividing by zero not possible");
          }
          else
            setResult( operand1 % operand2 );
        }
      }
    }
    else if(!text.includes("0,1,2,3,4,5,6,7,8,9,+,-,*,/,%"))
      alert("No expression");
    else if(text.includes("0,1,2,3,4,5,6,7,8,9") && !text.includes("+,-,*,/,%"))
      alert("No operators given.")
      
  };

  const resultView = () =>{
    return result;
  };

  const resultDelete = () =>{
    setResult("");
  }

  return(
    <div className="cal-main">
      <h1 className="heading">Calculator</h1>
      <Form calculate={calculate} resultView={resultView} resultDelete={resultDelete}/>
    </div>
  )
}

export default App;
