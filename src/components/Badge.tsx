import React, { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components';

export type BadgeColor = 'default' | 'primary' | 'success' | 'error' | 'info';

interface BadgeProps {
  color?: BadgeColor;
}

const Badge = ({ color = 'default', children }: PropsWithChildren<BadgeProps>) => {
  return (
    <Element color={color}>
      {children}
    </Element>
  )
}

const Element = styled.span<{ color: BadgeColor }>`
  padding: 4px 8px;
  border-radius: 9999px;
  ${({ color }) => getStyle(color)}
`

const getStyle = (color: BadgeColor) => {
  switch (color) {
    case "default":
      return css`
        color: rgb(75 85 99);
        background-color: rgb(243 244 246);
      `
    case 'primary':
      return css`
        color: rgb(126 34 206);
        background-color: rgb(243 232 255);
      `;
    case "success":
      return css`
        color: rgb(21 128 61);
        background-color: rgb(220 252 231);
      `;
    case "error":
      return css`
        color: rgb(185 28 28);
        background-color: rgb(254 226 226);
      `;
    case "info":
      return css`
        color: rgb(29 78 216);
        background-color: rgb(219 234 254);
      `;
  }
}

export default Badge