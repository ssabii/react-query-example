import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

interface PostProps {
  postId: number
}

const Post = ({ postId }: PostProps) => {
  const { data } = useQuery(
    ['post', postId],
    async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      return data;
    }
  )

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Post