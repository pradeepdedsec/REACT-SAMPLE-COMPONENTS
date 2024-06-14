import ComponentB from './ComponentB';
import './styles.css';
import { createContext, useState } from 'react';

export const MyContext=createContext();

function ComponentA(){

    const [user,setUser]=useState("pradeep");

    return <>
        <div className="box">
                <h1>ComponentA</h1>
                <h2>Hello {user}</h2>
                <MyContext.Provider value={user}>
                    <ComponentB user={user}/>
                </MyContext.Provider>
        </div>
    </>;
}

export default ComponentA;