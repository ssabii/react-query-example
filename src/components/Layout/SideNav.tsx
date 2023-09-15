import React from 'react'
import styled from 'styled-components'

const SideNav = () => {
  return (
    <Nav>
      <Ul>
        <Li>Post 1</Li>
        <Li>Post 2</Li>
        <Li>Post 3</Li>
      </Ul>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  width: 240px;
  height: 100%;
  margin: 0;
  padding: 24px;
  border-right: 1px solid rgb(229 231 235);
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
`

const Li = styled.li`
  font-weight: 600;
`;

export default SideNav