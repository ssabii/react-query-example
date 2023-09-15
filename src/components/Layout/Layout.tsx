import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'

const Layout = () => {
  return (
    <Container>
      <SideNav />
      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const Main = styled.main`
  width: calc(100% - 240px);
  height: 100%;
  margin-left: 240px;
  padding: 24px;
`

export default Layout