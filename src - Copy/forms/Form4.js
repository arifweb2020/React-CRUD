import React, { useState } from 'react'


const Form4 = () => {

   // const url = "";

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
    
   {/*
    for saving data
    
    Axios.post(url,{
        name:data.name,
        date:data.date,
        iduser:parseInt(data.iduser)
    }).then((res)=> console.log(res.data))
  }*/}
  }
  const myInput = (e)=>{
    console.log(e.target.value);
    console.log(e.target.name);

    const value = e.target.value;
    const name = e.target.name;

setFullname ((prev)=>{

    if(name === 'fName'){

        return{
            fname : value,
            lname : prev.lname,
            email: prev.email,
            phone: prev.phone
        }
        
    } else if (name === 'lName'){
        return{
            fname : prev.fname,
            lname : value,
            email: prev.email,
            phone: prev.phone
        }
    }

    else if (name === 'email'){
        return{
            fname : prev.fname,
            lname : prev.lname,
            email: value,
            phone: prev.phone
        }
    }

    else if (name === 'phone'){
        return{
            fname : prev.fname,
            lname : prev.lname,
            email: prev.email,
            phone: value
        }
    }
})

  }

    return ( 
        <div className="App">
    <h1>Form4 {fullname.fname} {fullname.lname}</h1>
        <form onSubmit={myForm}>

        <input type="text" placeholder="enter your name" name="fName"
        value={fullname.fname} 
        onChange={myInput}/><br/>

        <input type="text" placeholder="enter your last name" name="lName"
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
 
export default Form4;