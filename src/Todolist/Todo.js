import React,{ useState } from 'react';

function Todo(){


    const [items,setitems]=useState(["apple","orange","banana"]);

    //let fruits=;

    //console.log(fruits);

    function handleClick(){
        let val=document.getElementById("item").value;
        if(!val){
            console.log("empty")
        }
        else{
        setitems([...items,val]);
        }
    }

    function handleRemove(e){
        setitems(() => items.filter((a,i) => !(i===e)))
        console.log(e)
    }

    return (<>
            <h1>List of fruits</h1>
            <ul>
                {items.map((a,i) => 
                <li key={i} onClick={() => handleRemove(i)}>
                    {a} - {i}
                    </li>)}
            </ul>
            <div>
            <input id="item" placeholder='enter a fruit'></input>
            <button onClick={handleClick}>ADD</button>
            </div>
           </>);
}

export default Todo;