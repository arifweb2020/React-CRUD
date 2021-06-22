import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
const ResCreate = () => {
    let history = useHistory();
    const [users,setUsers]=useState({
        name : "",
        address : "",
        rating:"",
        email:""
    });



const myInput = (e)=>{
    

setUsers ({...users,[e.target.name]:e.target.value })
}


const myForm = async (e)=>{

    e.preventDefault();
    await axios.post('http://localhost:3000/resturant', users);
    history.push("/list")
}

    return ( 
        <>
        <div className="container">
<h1>Create </h1>

<div className="col-md-4">
<form onSubmit={myForm}>
<div className="from-group">
<input type="text" placeholder="enter your name" name="name"
       value={users.name}
        onChange={myInput} className="form-control" /></div>
<div className="from-group">
        <input type="text" placeholder="enter address" name="address"
        value={users.address}
          onChange={myInput} className="form-control"/></div>
<div className="from-group">
<input type="text" placeholder="enter rating" name="rating"
        value={users.rating}
          onChange={myInput} className="form-control"/></div>
<div className="from-group">
<input type="email" placeholder="enter your email" name="email"
     value={users.email}
          onChange={myInput} className="form-control"/></div>


<div className="from-group">
        <button type="submit" >save</button>
        </div>    
</form>
</div>

</div>
        </>
     );
}
 
export default ResCreate;