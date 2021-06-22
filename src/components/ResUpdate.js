import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom'
const ResUpdate = () => {
    let history = useHistory();
    const { id } = useParams();
    const [users,setUsers]=useState({
        name : "",
        address : "",
        rating:"",
        email:""
    });

    useEffect(() => {
        loadUser();
      }, []);

const myInput = (e)=>{
    

setUsers ({...users,[e.target.name]:e.target.value })
}


const myForm = async (e)=>{

    e.preventDefault();
    await axios.put(`http://localhost:3000/resturant/${id}`, users);
    history.push("/list")
};

const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/resturant/${id}`);
    setUsers(result.data);
  };

 

    return ( 
        <>
        <div className="container">
<h1>Update </h1>

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
 
export default ResUpdate;