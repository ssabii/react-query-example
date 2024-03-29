import React from 'react'
import { Post } from 'api/post';
import styled from 'styled-components';
import PostItem from './PostItem';

interface PostListProps {
  posts?: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <List>
      {posts?.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </List>
  )
}

const List = styled.div`
  margin-top: 16px;
  border: 1px solid rgb(226 232 240);
  border-radius: 8px;
`

export default PostList