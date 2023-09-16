import React from 'react'
import NavItem from './NavItem'
import NavList from './NavList'
import { menus } from './menus'

const SideNav = () => {
  return (
    <NavList>
      {menus.map((menu) => (
        <NavItem
          key={menu.to}
          {...menu}
        />
      ))}
    </NavList>
  )
}

export default SideNav