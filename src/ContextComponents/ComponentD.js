import './styles.css';
import { MyContext } from './ComponentA';
import { useContext } from 'react';


function ComponentD(){

    const name=useContext(MyContext);

    return <>
        <div className="box">
                <h1>ComponentD</h1>
                <h2>Bye {name}</h2>
        </div>
    </>;
}

export default ComponentD;