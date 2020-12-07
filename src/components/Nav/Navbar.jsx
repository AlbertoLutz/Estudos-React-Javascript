import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: none;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
  padding: 15px 0;
  position: relative;
  z-index: 1;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar