import React, { useState } from 'react'

const Form = ({calculate, resultView}) =>{
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
                    calculate(1, text1, text2);
                }}>Add</button>

                <button onClick={()=>{
                    calculate(2, text1, text2);
                }}>Sub</button>

                <button onClick={()=>{
                    calculate(3, text1, text2);
                }}>Mul</button>

                <button onClick={()=>{
                    calculate(4, text1, text2);
                }}>Div</button>

                <br/>
                <input type="text" placeholder="Result" value={resultView()} readOnly/>
            </form>
        </div>
    );
};

export default Form;