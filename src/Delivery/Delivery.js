import React,{useState} from 'react';


function Delivery(){

    const [name,setName]=useState("");

    const [quant,setQuant]=useState(0);

    const [payment,setPayment]=useState("");

    const [comment,setComment]=useState("");

    const [status,setStatus]=useState("");

    function handleName(e){
        setName(e.target.value);
        console.log(e.target.value);
    }

    function handleQuant(e){
        setQuant(e.target.value);
    }

    function handleComment(e){
        setComment(e.target.value);
    }

    function handlePayment(e){
        setPayment(e.target.value);
    }

    function handleStatus(e){
        setStatus(e.target.value);
    }

    return <>
        <input onChange={(e) => handleName(e)}></input>
        <p>Name :{name}</p>
        <br/>
        <input type='Number' onChange={(e) => handleQuant(e)}></input>
        <p>Quantity :{quant}</p>
        <br/>
        <textarea onChange={(e) => handleComment(e)}></textarea>
        <p>Name :{comment}</p>
        <br/>
        <select onChange={(e) => handlePayment(e)}>
            <option value="">select a option</option>
            <option value="Visa">visa</option>
            <option value="Mastercard">mastercard</option>
            <option value="Rupay">rupay</option>
        </select>
        <p>Payment :{payment}</p>
        <br/>
        <label><input type="radio" onChange={(e) => handleStatus(e)} checked={status==="Delivery"} value="Delivery"></input>Delivery</label>
        <label><input type="radio" onChange={(e) => handleStatus(e)} checked={status==="Pick Up"} value="Pick Up"></input>Pick Up</label>
        <p>Status :{status}</p>
        <br/>
    </>;
}

export default Delivery;