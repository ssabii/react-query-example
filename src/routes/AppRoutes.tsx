import { Route, Routes } from 'react-router-dom'
import Layout from 'components/Layout'
import PostOnePage from 'pages/PostOnePage'
import PostTwoPage from 'pages/PostTwoPage'
import PostThreePage from 'pages/PostThreePage'
import ConditionPostsPage from 'pages/ConditionPostsPage'
import StaleTimeFiveMinutePostsPage from 'pages/StaleTimeFiveMinutePostsPage'
import QueryOneThousandPage from 'pages/QueryOneThousandPage'
import EnableDisablePostsPage from 'pages/EnableDisablePostsPage'
import RenderingOneThousandPage from 'pages/RenderingOneThousandPage'
import QueryClientPage from 'pages/QueryClientPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="post-1" element={<PostOnePage />} />
        <Route path="post-2" element={<PostTwoPage />} />
        <Route path="post-3" element={<PostThreePage />} />
        <Route path="condition-posts" element={<ConditionPostsPage />} />
        <Route path="staletime-5m-posts" element={<StaleTimeFiveMinutePostsPage />} />
        <Route path="query-1000" element={<QueryOneThousandPage />} />
        <Route path='enable-disable-posts' element={<EnableDisablePostsPage />} />
        <Route path="rendering-1000" element={<RenderingOneThousandPage />} />
        <Route path="query-client" element={<QueryClientPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes