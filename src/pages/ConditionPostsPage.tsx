import React, { useState } from 'react'
import Button from 'components/Button';
import PostsReactQuery from 'components/PostsReactQuery';
import styled from 'styled-components';

const ConditionPosts = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Buttons>
        <Button onClick={() => setShow(true)}>show</Button>
        <Button onClick={() => setShow(false)}>hide</Button>
      </Buttons>
      {show && (<PostsReactQuery />)}
    </>
  )
}

const Buttons = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 8px;
`

export default ConditionPosts