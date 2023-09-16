import React from 'react'
import styled from 'styled-components'
import { useLocation, Link } from 'react-router-dom'

interface NavItemProps {
  name: string;
  to: string;
}

const NavItem = ({ name, to }: NavItemProps) => {
  const { pathname } = useLocation();

  return (
    <Li $active={pathname === to}>
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
  )
}

const Li = styled.li<{ $active: boolean }>`
  padding: 8px;
  color: ${({ $active: active }) => active ? 'rgb(79 70 229)' : 'black'};
  background-color: ${({ $active: active }) => active ? 'rgb(249 250 251)' : 'transparent'};
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
`;

export default NavItem