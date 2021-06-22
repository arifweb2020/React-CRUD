import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
    return ( 
        <>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <Link className="navbar-brand" to="/">Hotel Arena</Link>


  <ul className="navbar-nav">
    
    <li className="nav-item">
    <Link className="nav-link" to="/list">User list</Link>
    </li>
    <li className="nav-item">
    <Link  className="nav-link" to="/create">Create </Link>
    </li>
    <li className="nav-item">
    <Link  className="nav-link" to="/search">User Search</Link>
    </li>
    <li className="nav-item">
    <Link  className="nav-link" to="/details">User Details</Link>
    </li>
    <li className="nav-item">
    <Link  className="nav-link" to="/update">User Update</Link>
    </li>

   
  </ul>
</nav>
        </>
     );
}
 
export default Nav;