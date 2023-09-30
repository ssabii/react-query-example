import { useQuery, QueryOptions } from '@tanstack/react-query'
import { fetchPosts } from 'api/post'

const usePostsQuery = (options: QueryOptions = {}) => {
  return useQuery(
    ['posts'],
    fetchPosts,
    options,
  )
}

export default usePostsQuery