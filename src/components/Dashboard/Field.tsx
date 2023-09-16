import React, { ReactNode } from 'react';
import styled from 'styled-components'

interface FieldProps {
  label: ReactNode;
  value: ReactNode;
}

const Field = ({ label, value }: FieldProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <div>{value}</div>
    </Container>
  )
}

const Container = styled.div`
  height: 32px;
  margin-top: 8px;
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
`

const Label = styled.div`
  color: rgb(17 24 39);
  font-weight: 600;
`

export default Field;