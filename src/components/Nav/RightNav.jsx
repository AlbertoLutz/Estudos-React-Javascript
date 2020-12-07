import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  flex-flow: column nowrap;
  background-color: #FFC502;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  font-family: Arial;
  font-weight: bold;
  
  li {
    padding: 18px 10px;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  a:hover {
    color: rgba(0, 0, 0, .7)
  }
 
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="%">Menu 1</a></li>
      <li><a href="%">Menu 2</a></li>
      <li><a href="%">Menu 3</a></li>
      <li><a href="%">Menu 4</a></li>
    </Ul>
  )
}

export default RightNav