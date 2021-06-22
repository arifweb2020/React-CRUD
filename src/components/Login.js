import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");

    const history = useHistory();

useEffect(()=>{

    if(localStorage.getItem('user-info')){
        history.push("/")
    }

},[]);

const login = async ()=>{

    console.log(name,password);

    let item = {name,password};

    let result = await fetch("http://localhost:3000/login", {

    method:"post",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    },
    body:JSON.stringify(item)

    });

    const res1 = await result.json();

    if (res1.length>0){
        localStorage.setItem("user-info",JSON.stringify(res1));

        history.push("/")
    }
    else{
        alert ("wrong username or password")
    }

}

    return ( 
        <>
<h1>Login</h1>
<div className="col-md-4">
<input type="text" placeholder="enter name"
onChange={(e)=>setName(e.target.value)}
className="form-control" /><br/>
<input type="password" placeholder="enter password"
onChange={(e)=>setPassword(e.target.value)}
className="form-control" /><br/>
<button onClick={login}>Login </button>
</div>
        </>
     );
}
 
export default Login;