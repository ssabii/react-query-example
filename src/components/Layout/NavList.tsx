import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from 'api/post'
import React, { FC } from 'react'
import styled from 'styled-components'

const NavList: FC = ({ children }) => {
  useQuery(
    ['posts'],
    fetchPosts,
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 0,
    }
  )

  return (
    <Nav>
      <Ul>{children}</Ul>
    </Nav >
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
  list-style: none;
`

export default NavList