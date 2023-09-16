import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Field from './Field'
import Text from './Text'

interface PostProps {
  postId: number
}

const Post = ({ postId }: PostProps) => {
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

const fetchPost = async (postId: number) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

  return data;
}



export default Post