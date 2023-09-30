import React from 'react'
import { UseQueryOptions } from '@tanstack/react-query'
import { Post } from 'api/post';
import PostList from './PostList';
import Dashboard from './Dashboard';
import usePostsQuery from 'hooks/usePostsQuery';

interface PostsReactQueryProps {
  options: UseQueryOptions<Post[]>
}


const PostsReactQuery = ({ options }: PostsReactQueryProps) => {
  const { data, ...rest } = usePostsQuery(options);

  return (
    <>
      <Dashboard {...rest} />
      <PostList posts={data} />
    </>
  )
}

export default PostsReactQuery