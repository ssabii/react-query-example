import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Field from './Field';
import Text from './Text';
import { fetchPosts } from 'api/post';

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
      <Text>{JSON.stringify(data)}</Text>
    </>
  )
}

export default PostsReactQuery