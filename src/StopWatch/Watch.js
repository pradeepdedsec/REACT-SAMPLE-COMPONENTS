import {useState,useRef, useEffect} from 'react';
import './styles.css';

function Watch(){

    const [isRunning,setIsRunning]=useState(false);
    const [elapsedtime,setElapsedtime]=useState(0)
    const intervalIdRef=useRef(null);
    const startTimeref=useRef(0);

    useEffect(() =>{
        if(isRunning){
            intervalIdRef.current=setInterval(() =>{
                setElapsedtime(Date.now()-startTimeref.current);
            },1);
        }

        return () =>{
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeref.current=Date.now()-elapsedtime;
        console.log(startTimeref.current);
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedtime(0);
        setIsRunning(false);
    }

    function formatime(){
        let hours=Math.floor(elapsedtime/(1000 * 60 * 60))%60;
        let minutes=Math.floor(elapsedtime/(1000 * 60))%60;
        let seconds=Math.floor(elapsedtime/1000)%1000;
        let milliseconds=Math.floor(elapsedtime%100);

        hours=String(hours).padStart(2,"0");
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        milliseconds=String(milliseconds).padStart(2,"0");

        return minutes+":"+seconds+":"+milliseconds;
    }

    return (<div>
        <center>
        <div className='outer'>
            <div className='box'>
                <span>{formatime()}</span>
            </div>
            <div className='buttons'>
                <button className='start' onClick={start}>Start</button>
                <button className='stop' onClick={stop}>Stop</button>
                <button className='reset' onClick={reset}>Reset</button>
            </div>
        </div>
        </center>
    </div>);
}

export default Watch;