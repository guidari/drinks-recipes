import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.3);
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link href="/"><a><h1>Drink Recipes</h1></a></Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar