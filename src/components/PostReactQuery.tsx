import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Field from './Field'
import Text from './Text'
import { fetchPost } from 'api/post'

interface PostProps {
  postId: number
}

const PostReactQuery = ({ postId }: PostProps) => {
  const { data, status, isLoading, isFetching } = useQuery(
    ['post', postId],
    () => fetchPost(postId),
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
        label="isFetching"
        value={isFetching ? 'true' : 'false'}
      />
      <Text>{JSON.stringify(data)}</Text>
    </>
  )
}

export default PostReactQuery