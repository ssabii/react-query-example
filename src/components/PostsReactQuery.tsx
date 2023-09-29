import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from 'api/post';
import PostList from './PostList';
import Dashboard from './Dashboard';

interface PostsReactQueryProps {
  staleTime?: number;
  cacheTime?: number;
}

const PostsReactQuery = ({ staleTime, cacheTime }: PostsReactQueryProps) => {
  const { data, ...rest } = useQuery(
    ['posts'],
    fetchPosts,
    {
      staleTime: staleTime,
      cacheTime: cacheTime,
    }
  )

  return (
    <>
      <Dashboard {...rest} />
      <PostList posts={data} />
    </>
  )
}

export default PostsReactQuery