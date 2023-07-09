import { Button } from 'react-bootstrap';
import React from 'react'
import {Link,useNavigate} from "react-router-dom";
import userLogo from "./user.png"
import ExpenseContext from '../../Context/Contex';

function Navbar() {

  const ExpenseCtx = React.useContext(ExpenseContext);
  const Navigate = useNavigate();
  function Logout()
  {
    ExpenseCtx.Logout();
    Navigate("/Auth")
  }

  return (
    <>
    <nav className="navbar sticky-top w-100 bg-dark  navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
   
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Expense</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className='nav-link active' to="/"  >Home</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="/ExpensePage"  >Expense</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="/"  >Buy Premium</Link>
        </li>
        
      </ul>
   { ExpenseCtx.isLoggedin &&   <span className="navbar-text">
        <img width={"50px"}  className="me-4" style={{cursor:"pointer"}} src={userLogo} alt="" />
        <Button onClick={Logout}>Log Out</Button>
    </span>}
    </div>
  </div>

</nav>
    </>
  )
}

export default Navbar