import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Field from './Field';
import Text from './Text';

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

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async () => {
  const { data } = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)

  return data;
}


export default PostsReactQuery