import {useState} from 'react';
import './styles.css';

function Todolist(){

    const [items,setItems]=useState([]);

    const [t,setT]=useState("");

    function addItem(){
        const e=t;

        if(e===null || e===""){
            console.log("empty");
        }
        else{
            setItems((i)=> [...i,e]);
        }

        setT("");
    }

    function removeItem(i){
        setItems(items.filter((e,index) => !(index===i)))
    }

    function handlechange(e){
        setT(e.target.value);
    }


    return <>
        <div className="box">
        <h1>To-Do-List</h1>
        </div>
        
        <div className='two'>
        <input id="task" value={t} placeholder="Enter a task..." type="text" onChange={(e) => handlechange(e)}></input>
        <div id='Add' onClick={addItem}><div className='add-symbol'>+</div></div>
        </div>

        <ul>
            {items.map((e,i) => <li key={i}><div className='delete'onClick={() =>removeItem(i)}><i class="fa fa-trash delete-btn"></i></div><br/>{e} </li>)}
        </ul>
        


    </>;
}

export default Todolist;