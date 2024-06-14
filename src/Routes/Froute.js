import React,{useEffect, useState} from 'react'

const Froute = () => {

    let [details,setDetails]=useState([]);

    useEffect(()=>{
        let resfun=async ()=>{

          let grade={
            name:"pradeep",
            subject:"java",
            score:"O"
          }

            let options={
              method:"DELETE",
              headers:{
                'Content-Type':"application/json",
              },
              body: JSON.stringify(grade)
            }
            console.log(options.body);
            let response= await fetch("http://127.0.0.1:8080/testing",options);
            let data=await response.json();
            console.log("Success.................");
        }

        (async () =>resfun())()
    },[]);
  return (
    <div>
    
    <h1>Hello World</h1>
    </div>
  )
}

export default Froute;

/*<ul>
    {
      details.map((a,i) =>
        <li key={i}>
          <p>name :{a.name}</p>
          <p>course :{a.course}</p>
          <p>age :{a.age}</p>
        </li>
      )
    }
    </ul>



    @PostMapping("/testing")
    public ResponseEntity<Object> posting( Grade grade){

        System.out.print("\n"+grade.getName()+"\n"+grade.getScore()+"\n"+grade.getSubject());
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    */