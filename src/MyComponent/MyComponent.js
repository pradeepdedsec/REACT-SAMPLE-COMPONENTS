import { useState,useRef, useEffect } from "react";

function MyComponent(){

    const num1=useRef(null);
    const num2=useRef(null);
    const num3=useRef(null);


    function handleClick1(){
        num1.current.focus();
        num1.current.style.backgroundColor="blue";
        num2.current.style.backgroundColor="";
        num3.current.style.backgroundColor="";
    }

    function handleClick2(){
        num2.current.focus();
        num1.current.style.backgroundColor="";
        num2.current.style.backgroundColor="blue";
        num3.current.style.backgroundColor="";    
    }

    function handleClick3(){
        num3.current.focus();
        num1.current.style.backgroundColor="";
        num2.current.style.backgroundColor="";
        num3.current.style.backgroundColor="blue";    
    }

    return <div>
                <button onClick={handleClick1}>Click Me</button>
                <br/>
                <input ref={num1}/>
                <br/>
                <button onClick={handleClick2}>Click Me</button>
                <br/>
                <input ref={num2}/>
                <br/>
                <button onClick={handleClick3}>Click Me</button>
                <br/>
                <input ref={num3}/>
           </div>;
}

export default MyComponent;