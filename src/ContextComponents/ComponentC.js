import './styles.css';
import ComponentD from './ComponentD';
import { useContext } from 'react';
import { MyContext } from './ComponentA';

function ComponentC(){

    const name=useContext(MyContext);

    return <>
        <div className="box">
                <h1>ComponentC</h1>
                <h2>Hello again {name}</h2>
                <ComponentD/>
        </div>
    </>;
}

export default ComponentC;