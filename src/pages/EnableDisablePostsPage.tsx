import React, { useState } from 'react'
import PostsReactQuery from 'components/PostsReactQuery';
import styled from 'styled-components';
import Button from 'components/Button';

const EnableDisablePosts = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <>
      <Buttons>
        <Button onClick={() => setEnabled(true)}>Enable</Button>
        <Button onClick={() => setEnabled(false)}>Disable</Button>
      </Buttons>
      <PostsReactQuery options={{ enabled }} />
    </>
  )
}

const Buttons = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 8px;
`

export default EnableDisablePosts