import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { Post, fetchPosts } from 'api/post'

const usePostsQuery = (options?: UseQueryOptions<Post[]>) => {
  return useQuery<Post[]>(
    queryKey,
    fetchPosts,
    options,
  )
}

export const queryKey = ['posts']

export default usePostsQuery