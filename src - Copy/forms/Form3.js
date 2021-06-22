import React, { useState } from 'react'


const Form3 = () => {

    const [fullname,setFullname]=useState({
        fname : "",
        lname : "",
        email:"",
        phone:""
    });


  const  myForm = (event)=>{
    event.preventDefault();
    //setFinalname(name);
    //setLfinalname(lname);
    
  }

  const myInput = (e)=>{
    console.log(e.target.value);
    console.log(e.target.name);

    const value = e.target.value;
    const name = e.target.name;

setFullname ((prev)=>{

   return{
       ...prev,
       [name]:value,
   }
})

  }

    return ( 
        <div className="App">
    <h1>Form3 {fullname.fname} {fullname.lname}</h1>
        <form onSubmit={myForm}>

        <input type="text" placeholder="enter your name" name="fname"
        value={fullname.fname} 
        onChange={myInput}/><br/>

        <input type="text" placeholder="enter your last name" name="lname"
      value={fullname.lname}
          onChange={myInput}/><br/>

<input type="email" placeholder="enter your email" name="email"
      value={fullname.email}
          onChange={myInput}/><br/>

<input type="text" placeholder="enter your mobile no" name="phone"
      value={fullname.phone}
          onChange={myInput}/><br/>

        <button type="submit">save</button>
            </form>

        </div>
     );
}
 
export default Form3;