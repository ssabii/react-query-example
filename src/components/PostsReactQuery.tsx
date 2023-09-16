import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from 'api/post';
import PostList from './PostList';
import Dashboard from './Dashboard';

const PostsReactQuery = () => {
  const { data, ...rest } = useQuery(
    ['posts'],
    fetchPosts,
  )

  return (
    <>
      <Dashboard {...rest} />
      <PostList posts={data} />
    </>
  )
}

export default PostsReactQuery