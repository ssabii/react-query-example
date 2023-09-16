import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Field from './Field';
import Text from './Text';

const Posts = () => {
  const { data, status, isLoading, isFetching, fetchStatus } = useQuery(
    ['posts'],
    async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      return data;
    },
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

export default Posts