import React, { useState } from 'react'


const  Form1 = () => {
    const [name,setName]=useState("");
    const [fullname,setFullname]=useState();
    
    const inputEvent = (e)=>{
    console.log(e.target.value);
    setName(e.target.value);
    }
    
    const submit = ()=>{
      setFullname(name);
      console.log(`my name is ${name}`);
    }
    
      return (
        <div className="App">
          <h1>Form1 Handling {fullname}</h1>
    
        <input type="text"
          name="name"
          placeholder="enter name"
          onChange={inputEvent}
          value={name}
          /><br/>
      
        <button onClick={submit}>Submit</button>
        </div>
      );
}
 
export default Form1 ;