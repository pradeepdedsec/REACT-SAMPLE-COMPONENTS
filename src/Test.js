import React from 'react';
import { useState,useRef } from 'react';

function Test(){

    const [num,setnum]=useState(90);
    const n=useRef(null);
    let r=useRef(0);
    let f;

    console.log("changing");

    function handle(){
        r.current=r.current+1;
        if(r.current%2===0){
            n.current.style.backgroundColor="blue";
        }
        else{
            n.current.style.backgroundColor="yellow";
        }
        
        console.log("1");
    }

    return <>
        <h1 ref={n}>hello {n.current}</h1>
        <button onClick={handle}>Click me</button>
    </>
}

export default Test;