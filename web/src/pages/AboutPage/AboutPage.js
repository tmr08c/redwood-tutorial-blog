import { Link } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const AboutPage = () => {
  return (
    <BlogLayout>
      <p>
        This site was created as a part of the{' '}
        <Link to="https://redwoodjs.com/tutorial">Redwood Tutorial</Link>.
      </p>
      <p>So far, so good.</p>
    </BlogLayout>
  )
}

export default AboutPage
