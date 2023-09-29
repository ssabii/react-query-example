import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from 'api/post'

const usePostsQuery = () => {
  return useQuery(
    ['posts'],
    fetchPosts,
  )
}

export default usePostsQuery