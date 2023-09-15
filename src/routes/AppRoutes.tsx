import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from 'components/Layout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  )
}

export default AppRoutes