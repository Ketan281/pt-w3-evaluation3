import React from 'react'
import { Link } from 'react-router-dom'
import { Button, NavBarWrapper } from './Navbar.styled';




const Navbar = () => {
  return (
    <div>
      <NavBarWrapper>
        <Button>
      <Link to="/Home">Home</Link> </Button>&nbsp; &nbsp;
      <Button><Link to="/Register">Register</Link> </Button>&nbsp; &nbsp;
      <Button><Link to="/login">Login</Link> </Button>&nbsp; &nbsp;
      <Button><Link to="/Products">Products</Link> </Button>&nbsp; &nbsp;
      {/* <Link to="/logOut">LogOut</Link> */}
      
      </NavBarWrapper>
    </div>
  )
}

export {Navbar}