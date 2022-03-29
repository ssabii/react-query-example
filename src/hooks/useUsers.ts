import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUsers = async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  return data
}

const useUsers = () => {
  const { status, data, error } = useQuery('users', fetchUsers)
  return { status, data, error }
}

export default useUsers
