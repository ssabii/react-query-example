import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'

const Layout = () => {
  return (
    <Container>
      <SideNav />
      <Outlet />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export default Layout