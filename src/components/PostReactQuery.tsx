import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Field from './Field'
import { fetchPost } from 'api/post'
import PostList from './PostList'

interface PostProps {
  postId: number
}

const PostReactQuery = ({ postId }: PostProps) => {
  const { data, status, isLoading, isFetching } = useQuery(
    ['post', postId],
    () => fetchPost(postId),
  )

  const posts = data ? [data] : undefined

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
      <PostList posts={posts} />
    </>
  )
}

export default PostReactQuery