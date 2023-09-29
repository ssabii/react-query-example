import React from 'react'
import PostsReactQuery from 'components/PostsReactQuery'

const StaleTimeFiveMinutePosts = () => (
  <PostsReactQuery
    staleTime={1000 * 60 * 5}
    cacheTime={0}
  />
)

export default StaleTimeFiveMinutePosts