import React,{useState} from 'react';
import './styles.css';

function ColorPicker(){

    const [color,setColor]=useState("#FFFFF");

    function handleColor(e){
        setColor(e.target.value)
    }

    return <>
        <div className='container'>
        <div style={{backgroundColor:color}}className="color-box">
            <p>Selected Color :{color}</p>
        </div>
        <label>Select a Color:<br/>
        <input type="color" onChange={(e) => handleColor(e)}></input>
        </label>
        </div>

    </>

}

export default ColorPicker;