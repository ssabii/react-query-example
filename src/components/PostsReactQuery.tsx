import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Field from './Field';
import { fetchPosts } from 'api/post';
import PostList from './PostList';

const PostsReactQuery = () => {
  const { data, status, isLoading, isFetching, fetchStatus } = useQuery(
    ['posts'],
    fetchPosts,
  )

  return (
    <>
      <Field
        label="status"
        value={status}
      />
      <Field
        label="isLoading"
        value={isLoading ? 'true' : 'false'}
      />
      <Field
        label="fetchStatus"
        value={fetchStatus}
      />
      <Field
        label="isFetching"
        value={isFetching ? 'true' : 'false'}
      />
      <PostList posts={data} />
    </>
  )
}

export default PostsReactQuery