import React from 'react'
import styled from 'styled-components'
import { Post } from 'api/post'

const PostItem = ({ title, body }: Post) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  )
}

const Container = styled.div`
  padding: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid rgb(226 232 240);
  }
`;

const Title = styled.div`
  color: rgb(17 24 39);
  font-weight: 600;
`;

const Body = styled.div`
  margin-top: 4px;
  color: rgb(107 114 128);
`;

export default PostItem