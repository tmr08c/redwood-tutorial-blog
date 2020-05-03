import { Link, routes } from '@redwoodjs/router'
const BlogPost = ({ post }) => {
  return (
    <article key={post.id}>
      <header>
        <h3>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h3>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {post.createdAt}</div>
    </article>
  )
}

export default BlogPost
