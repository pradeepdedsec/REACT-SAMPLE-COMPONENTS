import React,{useState} from 'react';

function Carlist(){

    const [list,setList]=useState([]);

    const [cars,setCars]=useState({Year:2024,Name:"dodge",Model:"challenger"})

    function handleYear(e){
        setCars((c) => ({...c,Year:e.target.value}));
    }

    function handleName(e){
        setCars((c) => ({...c,Name:e.target.value}));
    }

    function handleModel(e){
        setCars((c) => ({...c,Model:e.target.value}));
    }

    function handleAdd(){
        setList((a) => [...a,cars])
        setCars({Year:new Date().getFullYear(),Name:"",Model:""})
        console.log(list);
    }

    function remove(index){
        setList(list.filter((e,i) => !(index===i)));
    }

    return <>
        <h1>List of Cars</h1>
        <ol>
        {list.map((item,index) => <li  key={index}>{item.Year} {item.Name} {item.Model}  <button onClick={() => remove(index)}>delete</button></li>)}
        </ol>
        <input type='Number' value={cars.Year} onChange={(e) => handleYear(e)} ></input>
        <br/>
        <input type='text'  value={cars.Name} onChange={(e) => handleName(e)}></input>
        <br/>
        <input type='text'  value={cars.Model} onChange={(e) => handleModel(e)}></input>
        <br/>
        <button onClick={handleAdd}>ADD</button>
    </>;
}

export default Carlist;