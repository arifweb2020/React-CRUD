import React,{useState} from 'react';

const ResCreate = () => {

    const [users,setUsers]=useState({
        name : "",
        address : "",
        rating:"",
        email:""
    });


  const  myForm = ()=>{
   // event.preventDefault();
    //setFinalname(name);
    //setLfinalname(lname);

    fetch('http://localhost:3000/resturant',{

        method:"post",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(users)

    }).then((result)=>{
        return result.json();
    }).then((res)=>{
        console.log(res);
        alert("resturant has been added")
    })
    
  }

  const myInput = (e)=>{
    console.log(e.target.value);
    console.log(e.target.name);

    const value = e.target.value;
    const name = e.target.name;

setUsers ((prev)=>{

   return{
       ...prev,
       [name]:value,
   }
})

  }

    return ( 
        <>
        <div className="container">
<h1>Create </h1>

<div className="col-md-4">



        <input type="text" placeholder="enter your name" name="name"
        value={users.name} 
        onChange={myInput}/><br/>

        <input type="text" placeholder="enter address" name="address"
      value={users.address}
          onChange={myInput}/><br/>

<input type="text" placeholder="enter rating" name="rating"
      value={users.rating}
          onChange={myInput}/><br/>

<input type="email" placeholder="enter your email" name="email"
      value={users.email}
          onChange={myInput}/><br/>



        <button  onClick={myForm}>save</button>
            

</div>

</div>
        </>
     );
}
 
export default ResCreate;