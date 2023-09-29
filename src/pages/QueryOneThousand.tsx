import React from 'react'
import usePostsQuery from 'hooks/usePostsQuery'

const QueryOneThousand = () => {
  return (
    <>
      {[...new Array(1000)].map((_, index) => <Item key={index} />)}
    </>
  )
}

const Item = () => {
  const { data } = usePostsQuery();

  return <>{JSON.stringify(data)}</>
}

export default QueryOneThousand