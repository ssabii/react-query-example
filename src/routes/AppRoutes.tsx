import Layout from 'components/Layout'
import ConditionPosts from 'pages/ConditionPosts'
import EnableDisablePosts from 'pages/EnableDisablePosts'
import Post1 from 'pages/Post1'
import Post2 from 'pages/Post2'
import Post3 from 'pages/Post3'
import QueryOneThousand from 'pages/QueryOneThousand'
import StaleTimeFiveMinutePosts from 'pages/StaleTimeFiveMinutePosts'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="post-1" element={<Post1 />} />
        <Route path="post-2" element={<Post2 />} />
        <Route path="post-3" element={<Post3 />} />
        <Route path="condition-posts" element={<ConditionPosts />} />
        <Route path="staletime-5m-posts" element={<StaleTimeFiveMinutePosts />} />
        <Route path="query-1000" element={<QueryOneThousand />} />
        <Route path='enable-disable-posts' element={<EnableDisablePosts />}
      </Route>
    </Routes>
  )
}

export default AppRoutes