import React, { useState } from 'react'
import Button from 'components/Button';
import Posts from 'components/Posts';
import styled from 'styled-components';

const ConditionPosts = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Buttons>
        <Button onClick={() => setShow(true)}>show</Button>
        <Button onClick={() => setShow(false)}>hide</Button>
      </Buttons>
      {show && (<Posts />)}
    </>
  )
}

const Buttons = styled.div`
  display: flex;
  margin-bottom: 8px;
  gap: 8px;
`

export default ConditionPosts