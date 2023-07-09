import { Button } from 'react-bootstrap';
import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
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
        <Link className='nav-link' to="/"  >Expense</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="/"  >Buy Premium</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="/"  >Home</Link>
        </li>
      </ul>
      <span className="navbar-text">
       <Button>Log Out</Button>
    </span>
    </div>
  </div>

</nav>
    </>
  )
}

export default Navbar