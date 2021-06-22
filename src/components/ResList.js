import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const ResList = () => {

    const[data,setData]=useState([]);

    useEffect(()=>{

        getData();
    },[]);

    const getData = async ()=>{

        const res = await fetch('http://localhost:3000/resturant');
        const res1 = await res.json();
       // const result = res1.data;
        console.log(res1)
        setData(res1.reverse());
        
    }

    const deleteUser = async (arif) => {
      await axios.delete(`http://localhost:3000/resturant/${arif}`);
      getData();
    };

    return ( 
    <> 
    <div className="container">
    <h1>Resturant List</h1>

    <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>address</th>
        <th>Rating</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
          data.map((item)=>{

            return(
                <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.rating}</td>
                <td>{item.email}</td>
                <td><Link to={`/update/${item.id}`} class="btn btn-danger btn-sm" style={{marginRight:"2px",background:"green",border:"none"}}>Edit</Link>
                <Link
                    class="btn btn-danger btn-sm"
                    onClick={() => deleteUser(item.id)}
                  >
                    Delete
                  </Link>
                </td>
                    </tr>
            )
          })
      }
      </tbody>
      </table>
      </div>
    </>
    );
}
 
export default ResList;