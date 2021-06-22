import React, { useState } from 'react'


const Form2 = () => {

    const [name,setName]=useState("");
    const [finalname,setFinalname]=useState("");

    const [lname,setLname]=useState("");
    const [lfinalname,setLfinalname]=useState("");

  const  myForm = (event)=>{
    event.preventDefault();
    setFinalname(name);
    setLfinalname(lname);
    
  }

  const nameInput = (e)=>{

    setName(e.target.value)
  }

const lnameInput = (e)=>{

    setLname(e.target.value)
}

    return ( 
        <div className="App">
    <h1>Form2 {finalname} {lfinalname}</h1>
        <form onSubmit={myForm}>

        <input type="text" placeholder="enter your name" value={name} onChange={nameInput}/><br/>

        <input type="text" placeholder="enter your last name" value={lname} onChange={lnameInput}/><br/>

        <button type="submit">save</button>
            </form>

        </div>
     );
}
 
export default Form2;