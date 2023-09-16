import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface FieldProps {
  label: ReactNode;
  value: ReactNode;
}

const Field = ({ label, value }: FieldProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
`

const Label = styled.div`
  width: 80px;
  font-weight: 600;
`

const Value = styled.div`
  flex: 1;
`

export default Field