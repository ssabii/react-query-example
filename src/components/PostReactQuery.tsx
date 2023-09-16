import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPost } from 'api/post'
import PostList from './PostList'
import Dashboard from './Dashboard'

interface PostProps {
  postId: number
}

const PostReactQuery = ({ postId }: PostProps) => {
  const { data, ...rest } = useQuery(
    ['post', postId],
    () => fetchPost(postId),
  )

  const posts = data ? [data] : undefined

  return (
    <>
      <Dashboard {...rest} />
      <PostList posts={posts} />
    </>
  )
}

export default PostReactQuery