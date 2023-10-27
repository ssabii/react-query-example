import React, { useState } from 'react'
import styled from 'styled-components';
import Button from 'components/Button';
import PostsReactQuery from 'components/PostsReactQuery';
import { useQueryClient } from '@tanstack/react-query';
import { queryKey } from 'hooks/usePostsQuery';

const QueryClient = () => {
  const [visible, setVisible] = useState(true);
  const queryClient = useQueryClient();

  const handleClickRefetchQueries = () => {
    queryClient.refetchQueries(queryKey);
  }

  const handleClickInvalidateQueries = () => {
    queryClient.invalidateQueries(queryKey);
  }

  const handleClickRemoveQueries = () => {
    queryClient.removeQueries(queryKey);
  }

  return (
    <>
      <Buttons>
        <Button onClick={() => setVisible(true)}>Visible</Button>
        <Button onClick={() => setVisible(false)}>Invisible</Button>
      </Buttons>
      <Buttons>
        <Button onClick={handleClickRefetchQueries}>refetchQueries</Button>
        <Button onClick={handleClickInvalidateQueries}>invalidateQueries</Button>
        <Button onClick={handleClickRemoveQueries}>removeQueries</Button>
      </Buttons>
      {visible && <PostsReactQuery />}
    </>
  )
}

const Buttons = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 8px;
`

export default QueryClient