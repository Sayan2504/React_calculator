import React, { useState } from 'react'
import '../App'

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
                <input className="text-field" type = "text" value ={text1} placeholder="Operand 1" onChange={changeText1}/>
                <input className="text-field" type = "text" value ={text2} placeholder="Operand 2" onChange={changeText2}/>
                <br/>
                <input className="result-field" type="text" placeholder="Result" value={resultView()} readOnly/>
                
                <br/>
                <button className="key">1</button>
                <button className="key">2</button>
                <button className="key">3</button>
                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    calculate(1, text1, text2);
                }}>+</button>

                <br/>
                <button className="key">4</button>
                <button className="key">5</button>
                <button className="key">6</button>
                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    calculate(2, text1, text2);
                }}>-</button>
                
                <br/>
                <button className="key">7</button>
                <button className="key">8</button>
                <button className="key">9</button>
                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    calculate(3, text1, text2);
                }}>*</button>

                <br/>
                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText1("");
                    setText2("");
                }}>Clear</button>
                <button className="key">0</button>
                <button className="key">%</button>
                <button className="key"onClick={(e)=>{
                    e.preventDefault();
                    calculate(4, text1, text2);
                }}>/</button>

               
            </form>
        </div>
    );
};

export default Form;