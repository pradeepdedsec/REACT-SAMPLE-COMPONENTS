import React,{ useEffect,useState } from "react";
import './clock.css';

function DigitalClock(){

    //let time=new Date();

    const [time,setTime]=useState(new Date());

    const interval=useEffect(() =>{
        setInterval(() =>{
            setTime(new Date());
        },1000)
    },[]);

    function gettime(){
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridium=time.getHours()>12?"PM":"AM";

        if(hours>12)
            hours=hours%12;
        if(hours===0)
            hours=12;
        return(changetime(hours) +" : "+ changetime(minutes)+" : "+changetime(seconds)+" "+meridium);
    }

    function changetime(num){
        if(num<10)
            return "0"+num;
        return num;
    }

    console.log(time.getHours);

    return <>
    <div className="outer">
    <div className="clock">
    <span className="time">{gettime()}</span>
    </div>
    </div>
    </>;
}

export default DigitalClock;