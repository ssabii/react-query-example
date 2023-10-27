import React from 'react'
import Button from 'components/Button'
import styled from 'styled-components'

const RenderingOneThousand = () => {
  return (
    <Container>
      {[...new Array(1000)].map((_, index) =>
        <Button key={index}>
          {index + 1}
        </Button>)}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export default RenderingOneThousand