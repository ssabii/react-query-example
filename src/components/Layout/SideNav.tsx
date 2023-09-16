import React from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'

const SideNav = () => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <Ul>
        {menus.map(({ name, to }) => (
          <Li
            key={to}
            isActive={pathname === to}
          >
            <Link
              to={to}
              style={{
                display: 'block',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {name}
            </Link>
          </Li>
        ))}
      </Ul>
    </Nav >
  )
}

interface Menu {
  name: string
  to: string
}

const menus: Menu[] = [
  {
    name: 'fetch post 1',
    to: '/post-1'
  },
  {
    name: 'fetch post 2',
    to: '/post-2'
  },
  {
    name: 'fetch post 3',
    to: '/post-3'
  }
]

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
  list-style: none;
`

const Li = styled.li<{ isActive?: boolean }>`
  padding: 8px;
  color: ${({ isActive }) => isActive ? 'rgb(79 70 229)' : 'black'};
  background-color: ${({ isActive }) => isActive ? 'rgb(249 250 251)' : 'transparent'};
  border-radius: 8px;
  font-weight: 600;
`;

export default SideNav