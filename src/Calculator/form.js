import React, { useState } from 'react'
import '../App'

const Form = ({calculate, resultView}) =>{
    const [text,setText] = useState([]);

    const changeText=(e)=>{
        setText(e.target.value)  
    };

    return(
        <div>
            <form>
                <input className="text-field" type = "text" value ={text} placeholder="Enter expression" onChange={changeText} autoFocus/>
                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    
                }}>C</button>


                <br/>
                <input className="text-field" type="text" placeholder="Result" value={resultView()} readOnly/>
                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    calculate(text);
                }}>=</button>


                <br/>
                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("1"));
                }}>1</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("2"));
                }}>2</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("3"));
                }}>3</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("+")); 
                }}>+</button>

                <br/>
                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("4"));
                }}>4</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("5"));
                }}>5</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("6"));
                }}>6</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("-"));
                }}>-</button>
                



                <br/>
                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("7"));
                }}>7</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("8"));
                }}>8</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("9"));
                }}>9</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("*"));
                }}>*</button>



                <br/>
                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText("");
                }}>AC</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("0"));
                }}>0</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("%"));
                }}>%</button>

                <button className="key" onClick={(e)=>{
                    e.preventDefault();
                    setText(prev => prev.concat("/"));
                }}>/</button>

               
            </form>
        </div>
    );
};

export default Form;