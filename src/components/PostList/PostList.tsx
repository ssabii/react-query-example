import React from 'react'
import { Post } from 'api/post';
import styled from 'styled-components';
import PostItem from './PostItem';

interface PostListProps {
  posts?: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  console.log(posts);
  return (
    <List>
      {posts?.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </List>
  )
}

const List = styled.div`
  border: 1px solid rgb(226 232 240);
  border-radius: 8px;
`

export default PostList