import BlogPostsCell from 'src/components/BlogPostsCell'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const HomePage = () => {
  return (
    <BlogLayout>
      <h1>Redwood Tutorial Blog</h1>
      <h2>Posts</h2>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
