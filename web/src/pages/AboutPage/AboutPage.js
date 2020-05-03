import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <header>
        <h1>Redwood Tutorial Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          This site was created as a part of the{' '}
          <Link to="https://redwoodjs.com/tutorial">Redwood Tutorial</Link>.
        </p>
        <p>So far, so good.</p>
        <p>
          Why don't you just go <Link to={routes.home()}>Home</Link>
        </p>
      </main>
    </>
  )
}

export default AboutPage
