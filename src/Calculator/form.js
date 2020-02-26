import React, { useState } from 'react'

const Form = (calculate) =>{
    const [text1,setText1] = useState([]);
    const [text2,setText2] = useState([]);

    const changeText1=(e)=>{
        setText1(e.target.value)  
    };

    const changeText2=(e)=>{
        setText2(e.target.value)  
    };
    return(
        <div>
            <form>
                <input type = "text" value ={text1} placeholder="Operand 1" onChange={changeText1}/>
                <input type = "text" value ={text2} placeholder="Operand 2" onChange={changeText2}/>
                <br/>
                <button onClick={()=>{
                    calculate(text1, text2, 1)
                }}>Add</button>
                <button>Sub</button>
                <button>Mul</button>
                <button>Div</button>
                <br/>
                <input type="text" placeholder="Result" value={calculate.result}/>
            </form>
        </div>
    );
};

export default Form;