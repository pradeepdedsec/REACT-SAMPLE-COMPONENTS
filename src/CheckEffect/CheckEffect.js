import { useEffect,useState } from "react";

function CheckEffect(){

    const [count,setCount]=useState(0);

    const [height,setHeight]=useState(window.innerHeight);

    const [width,setWidth]=useState(window.innerWidth);

    useEffect(() =>{
        console.log(" clicked....................");
    },[count]);

    useEffect(() => {
        document.title=height+" X "+width;
        window.addEventListener("resize",() =>{
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
            //console.log("changing "+window.innerHeight+" x "+window.innerWidth);
        });

        console.log("testing......2");
    },[]);

    useEffect(() =>{
        console.log("last test  :"+height+" X "+width);
        window.innerHeight=height;
        window.innerWidth=width;
        document.title=height+" X "+width;
        console.log("last test two  :"+window.innerHeight+" X "+ window.innerWidth);
    },[height,width]);

    useEffect(() =>{
        
    },[]);

    function addCount(){
        setCount(c => c+1);
    }

    function subCount(){
        setCount(c => c-1);
    }

    function resetCount(){
        setCount(0);
    }

    function changeWidth(e){
        console.log(e.target.value);
        setWidth(e.target.value);
    }

    function changeHeight(e){
        console.log(e.target.value);
        setHeight(e.target.value);
    }

    return <>
        <p  style={{backgroundColor:"white",width:"300px"}}>Count :{count}</p>
        <button onClick={addCount}>+</button>
        <button onClick={subCount}>-</button>
        <br/>
        <button onClick={resetCount}>reset</button>
        <br/>
        <input type="number" placeholder="Height" onChange={(e) => changeHeight(e)}></input>
        <input type="number" placeholder="Width" onChange={(e) => changeWidth(e)}></input>
    </>;
}

export default CheckEffect;